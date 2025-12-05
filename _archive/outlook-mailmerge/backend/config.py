from pathlib import Path
import os
from dotenv import load_dotenv

# Project root is parent of this "backend" folder
ROOT = Path(__file__).resolve().parents[1]
ENV_PATH = ROOT / ".env"
if ENV_PATH.exists():
    load_dotenv(ENV_PATH)

CLIENT_ID = os.getenv("CLIENT_ID")
TENANT_ID = os.getenv("TENANT_ID")
REDIRECT_URI = os.getenv("REDIRECT_URI", "http://localhost:53100")
SCOPES = (os.getenv("SCOPES") or "openid profile offline_access Mail.Send").split()

# Token cache will live in the user’s home directory
CACHE_DIR = Path.home() / ".spot_mailmerge"
CACHE_FILE = CACHE_DIR / "msal_cache.json"
CACHE_DIR.mkdir(parents=True, exist_ok=True)

# Local logs directory
LOGS_DIR = ROOT / "logs"
LOGS_DIR.mkdir(parents=True, exist_ok=True)