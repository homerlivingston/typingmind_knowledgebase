from pathlib import Path
from backend.merge.pipeline import preview_from_csv

ROOT = Path(__file__).resolve().parents[1]

CSV = ROOT / "data" / "contacts.csv"
TPL = ROOT / "templates" / "email_template.html"
OUT = ROOT / "previews"

if __name__ == "__main__":
    written, outdir = preview_from_csv(
        csv_path=CSV,
        template_path=TPL,
        out_dir=OUT,
        sender_name="Spot AM Team",
        sender_email="you@yourcompany.com",
        limit=5,
    )
    print(f"Generated {written} .eml preview(s) in: {outdir}")
