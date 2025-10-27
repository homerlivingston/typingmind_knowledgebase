import csv
import time
import uuid
from pathlib import Path
from typing import Optional

import requests

from backend.config import LOGS_DIR

GRAPH_BASE = "https://graph.microsoft.com/v1.0"


def _auth_headers(access_token: str) -> dict:
    return {
        "Authorization": f"Bearer {access_token}",
        "Content-Type": "application/json",
        "Accept": "application/json",
        "client-request-id": str(uuid.uuid4()),
    }


def send_mail(
    access_token: str,
    to_email: str,
    subject: str,
    html_body: str,
    save_to_sent: bool = True,
) -> None:
    """
    Send a message as the signed-in user.
    """
    url = f"{GRAPH_BASE}/me/sendMail"
    payload = {
        "message": {
            "subject": subject,
            "body": {"contentType": "HTML", "content": html_body},
            "toRecipients": [{"emailAddress": {"address": to_email}}],
        },
        "saveToSentItems": bool(save_to_sent),
    }
    resp = requests.post(url, headers=_auth_headers(access_token), json=payload, timeout=30)
    if resp.status_code not in (200, 202):
        raise RuntimeError(f"Graph sendMail failed ({resp.status_code}): {resp.text}")


def create_draft(
    access_token: str,
    to_email: str,
    subject: str,
    html_body: str,
) -> str:
    """
    Create a draft message and return its message ID.
    (Requires delegated permission Mail.ReadWrite.)
    """
    url = f"{GRAPH_BASE}/me/messages"
    payload = {
        "subject": subject,
        "body": {"contentType": "HTML", "content": html_body},
        "toRecipients": [{"emailAddress": {"address": to_email}}],
        "isDraft": True,
    }
    resp = requests.post(url, headers=_auth_headers(access_token), json=payload, timeout=30)
    if resp.status_code not in (200, 201):
        raise RuntimeError(f"Graph create draft failed ({resp.status_code}): {resp.text}")
    data = resp.json()
    return data.get("id") or ""


def send_draft(access_token: str, message_id: str) -> None:
    """
    Send a previously created draft.
    (Requires delegated permission Mail.ReadWrite.)
    """
    url = f"{GRAPH_BASE}/me/messages/{message_id}/send"
    resp = requests.post(url, headers=_auth_headers(access_token), timeout=30)
    if resp.status_code not in (200, 202):
        raise RuntimeError(f"Graph send draft failed ({resp.status_code}): {resp.text}")


def append_audit(row: dict, filename: Optional[str] = None) -> Path:
    """
    Append a row to a daily CSV in logs/. Returns the path.
    """
    filename = filename or f"sends_{time.strftime('%Y%m%d')}.csv"
    path = Path(LOGS_DIR) / filename
    file_exists = path.exists()
    with path.open("a", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=row.keys())
        if not file_exists:
            writer.writeheader()
        writer.writerow(row)
    return path
