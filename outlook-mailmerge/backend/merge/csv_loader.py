from pathlib import Path
from typing import Dict, Iterable, List, Tuple
import csv
import re

try:
    from email_validator import validate_email, EmailNotValidError  # type: ignore
    HAVE_EMAIL_VALIDATOR = True
except Exception:
    HAVE_EMAIL_VALIDATOR = False

RE_HTTP = re.compile(r"^https?://", re.I)

REQUIRED_COLS = ["email", "contact_name", "company_name", "company_lp"]


def _basic_email_check(addr: str) -> bool:
    return bool(re.match(r"^[^@]+@[^@]+\.[^@]+$", addr))


def validate_row(row: Dict[str, str]) -> Tuple[bool, str]:
    for col in REQUIRED_COLS:
        if not (row.get(col) or "").strip():
            return False, f"missing {col}"

    email = row["email"].strip()
    if HAVE_EMAIL_VALIDATOR:
        try:
            validate_email(email, check_deliverability=False)
        except EmailNotValidError as e:
            return False, f"bad email: {e}"
    else:
        if not _basic_email_check(email):
            return False, "bad email format"

    lp = row["company_lp"].strip()
    if not RE_HTTP.match(lp):
        return False, "company_lp must start with http(s)://"

    return True, ""


def load_rows(csv_path: Path) -> List[Dict[str, str]]:
    with csv_path.open(newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        rows = [dict({k: (v or "").strip() for k, v in r.items()}) for r in reader]

    good: List[Dict[str, str]] = []
    seen = set()
    for r in rows:
        ok, why = validate_row(r)
        if not ok:
            r["_error"] = why
            continue
        key = (r["email"].lower(), r["company_name"].lower())
        if key in seen:
            continue
        seen.add(key)
        good.append(r)
    return good
