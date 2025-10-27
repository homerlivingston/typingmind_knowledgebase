from pathlib import Path
from typing import Dict, Tuple, List
from email.message import EmailMessage
import re

from backend.merge.csv_loader import load_rows
from backend.merge.templating import render_html, render_subject


def _text_fallback(html: str) -> str:
    # Strip HTML into a readable plaintext fallback
    txt = re.sub(r"(?i)<br\s*/?>", "\n", html)
    txt = re.sub(r"(?is)<style.*?>.*?</style>", "", txt)
    txt = re.sub(r"(?is)<script.*?>.*?</script>", "", txt)
    txt = re.sub(r"(?s)<[^>]+>", "", txt)
    txt = re.sub(r"\n{3,}", "\n\n", txt).strip()
    return txt


def _make_message(to_email: str, subject: str, html_body: str, sender_name: str, sender_email: str) -> EmailMessage:
    msg = EmailMessage()
    msg["From"] = f"{sender_name} <{sender_email}>" if sender_name else sender_email
    msg["To"] = to_email
    msg["Subject"] = subject
    text = _text_fallback(html_body)
    msg.set_content(text)
    msg.add_alternative(html_body, subtype="html")
    return msg


def _safe_filename(s: str) -> str:
    s = "".join(c for c in s if c.isalnum() or c in ("-", "_"))
    return s or "message"


def preview_from_csv(
    csv_path: Path,
    template_path: Path,
    out_dir: Path,
    sender_name: str,
    sender_email: str,
    subject_template: str = "Quick benefits reminder for {{ company_name }}",
    limit: int = 0,
) -> Tuple[int, Path]:
    out_dir.mkdir(parents=True, exist_ok=True)
    rows = load_rows(csv_path)
    if limit and limit > 0:
        rows = rows[:limit]

    written = 0
    for row in rows:
        ctx: Dict[str, str] = {
            "contact_name": row.get("contact_name") or "there",
            "company_name": row["company_name"],
            "company_lp": row["company_lp"],
            "sender_name": sender_name or "",
        }
        html = render_html(template_path, ctx)
        subject = render_subject(subject_template, ctx)
        msg = _make_message(row["email"], subject, html, sender_name, sender_email)

        fname = f"{_safe_filename(row['company_name'])}__{row['email'].replace('@','_at_')}.eml"
        path = out_dir / fname
        with path.open("wb") as f:
            f.write(bytes(msg))
        written += 1

    return written, out_dir
    
def list_eml_queue(previews_dir: Path) -> List[Path]:
    """
    Return a list of .eml files in previews_dir, sorted by modified time (oldest first).
    """
    if not previews_dir.exists():
        return []
    emls = [p for p in previews_dir.iterdir() if p.suffix.lower() == ".eml" and p.is_file()]
    emls.sort(key=lambda p: p.stat().st_mtime)
    return emls