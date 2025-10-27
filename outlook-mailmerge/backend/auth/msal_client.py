import msal
from pathlib import Path
from typing import List, Optional
from backend.config import CLIENT_ID, TENANT_ID, REDIRECT_URI, SCOPES, CACHE_FILE

# Build the authority URL from your tenant (set in .env later)
AUTHORITY = f"https://login.microsoftonline.com/{TENANT_ID}" if TENANT_ID else None

def _load_cache() -> msal.SerializableTokenCache:
    """Load (or create) the on-disk token cache."""
    cache = msal.SerializableTokenCache()
    if CACHE_FILE.exists():
        try:
            CACHE_FILE.chmod(0o600)  # ensure user-only perms on mac/unix
            cache.deserialize(CACHE_FILE.read_text())
        except Exception:
            # If cache file is corrupted, start fresh (don’t crash auth)
            pass
    return cache

def _save_cache(cache: msal.SerializableTokenCache) -> None:
    """Persist token cache if it changed."""
    if cache.has_state_changed:
        CACHE_FILE.parent.mkdir(parents=True, exist_ok=True)
        CACHE_FILE.write_text(cache.serialize())
        try:
            CACHE_FILE.chmod(0o600)
        except Exception:
            pass

def get_access_token(scopes: Optional[List[str]] = None) -> str:
    """
    Acquire a Graph access token.
    1) Try silent (from cache)
    2) Fallback to interactive system-browser login (PKCE; no client secret)
    """
    if not CLIENT_ID or not TENANT_ID:
        raise RuntimeError(
            "Missing CLIENT_ID or TENANT_ID. Fill .env (copy from .env.example) before logging in."
        )

    cache = _load_cache()
    app = msal.PublicClientApplication(
        client_id=CLIENT_ID,
        authority=AUTHORITY,
        token_cache=cache,
    )
    scopes = scopes or SCOPES

    # 1) Silent first
    accounts = app.get_accounts()
    result = None
    if accounts:
        result = app.acquire_token_silent(scopes=scopes, account=accounts[0])

    # 2) Interactive if needed
    if not result:
        result = app.acquire_token_interactive(
            scopes=scopes,
            redirect_uri=REDIRECT_URI,  # must match the URI you register in Azure
            prompt="select_account",
        )

    _save_cache(cache)

    if not result or "access_token" not in result:
        err = result.get("error") if isinstance(result, dict) else "unknown_error"
        desc = result.get("error_description") if isinstance(result, dict) else "no description"
        raise RuntimeError(f"Auth failed: {err} — {desc}")

    return result["access_token"]

def sign_out() -> None:
    """Clear the local token cache (forces re-login next time)."""
    try:
        CACHE_FILE.unlink(missing_ok=True)
    except Exception:
        pass
