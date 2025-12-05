import imaplib
import os
from pathlib import Path
from datetime import datetime
from email import policy
from email.parser import BytesParser

# --- CONFIG ---
IMAP_HOST = os.getenv("IMAP_HOST", "outlook.office365.com")
IMAP_PORT = int(os.getenv("IMAP_PORT", "993"))
IMAP_USER = os.getenv("IMAP_USER", "")       # your mailbox login (e.g., you@yourcompany.com)
IMAP_PASS = os.getenv("IMAP_PASS", "")       # your password or app password
DRAFTS_FOLDER = os.getenv("IMAP_DRAFTS", "Drafts")  # often "Drafts" for Microsoft 365

PREVIEWS_DIR = Path(__file__).resolve().parents[1] / "previews"


def _rfc822_date(dt: datetime) -> bytes:
    # IMAP APPEND wants an optional INTERNALDATE; we can omit, or supply in RFC822
    return dt.strftime("%d-%b-%Y %H:%M:%S +0000").encode("ascii")


def _load_eml_bytes(p: Path) -> bytes:
    # Ensure the message includes minimal headers Outlook expects
    raw = p.read_bytes()
    msg = BytesParser(policy=policy.default).parsebytes(raw)
    # If you want to enforce "X-Unsent: 1" (some clients use it for draft), you can:
    if "X-Unsent" not in msg:
        msg["X-Unsent"] = "1"
    return msg.as_bytes()


def main():
    if not IMAP_USER or not IMAP_PASS:
        raise SystemExit("Set IMAP_USER and IMAP_PASS as environment variables before running.")

    emls = sorted([p for p in PREVIEWS_DIR.iterdir() if p.suffix.lower() == ".eml" and p.is_file()])
    if not emls:
        print(f"No .eml files found in: {PREVIEWS_DIR}")
        return

    print(f"Connecting to IMAP {IMAP_HOST}:{IMAP_PORT} as {IMAP_USER}...")
    with imaplib.IMAP4_SSL(IMAP_HOST, IMAP_PORT) as M:
        typ, _ = M.login(IMAP_USER, IMAP_PASS)
        if typ != "OK":
            raise SystemExit("IMAP login failed.")

        # Select Drafts (create if needed)
        typ, _ = M.select(f'"{DRAFTS_FOLDER}"')
        if typ != "OK":
            # Try to create then select
            M.create(f'"{DRAFTS_FOLDER}"')
            typ, _ = M.select(f'"{DRAFTS_FOLDER}"')
            if typ != "OK":
                raise SystemExit(f'Could not select or create folder "{DRAFTS_FOLDER}".')

        appended = 0
        for p in emls:
            try:
                raw = _load_eml_bytes(p)
                # \Draft flag marks it as a draft; INTERNALDATE optional
                flags = r'(\Draft)'
                typ, data = M.append(f'"{DRAFTS_FOLDER}"', flags, _rfc822_date(datetime.utcnow()), raw)
                if typ == "OK":
                    appended += 1
                    print(f"[{appended}] appended: {p.name}")
                else:
                    print(f"[SKIP] append failed for {p.name}: {typ} {data}")
            except Exception as e:
                print(f"[ERROR] {p.name}: {e}")

        M.logout()

    print(f"Done. Appended {appended} draft(s) to {DRAFTS_FOLDER}.")


if __name__ == "__main__":
    main()
