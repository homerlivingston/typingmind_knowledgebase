from pathlib import Path
import subprocess
import zipfile
import tkinter as tk
from tkinter import filedialog, messagebox

from backend.merge.pipeline import preview_from_csv, list_eml_queue

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_PREVIEWS = ROOT / "previews"
DEFAULT_TPL = ROOT / "templates" / "email_template.html"
DEFAULT_CSV = ROOT / "data" / "contacts.csv"


class LocalSenderUI:
    def __init__(self, master: tk.Tk):
        self.master = master
        master.title("Spot Mail Merge — Draft Builder")

        # Inputs
        self.csv_var = tk.StringVar(value=str(DEFAULT_CSV))
        self.tpl_var = tk.StringVar(value=str(DEFAULT_TPL))
        self.sender_name_var = tk.StringVar(value="Spot AM Team")
        self.sender_email_var = tk.StringVar(value="you@yourcompany.com")
        self.limit_var = tk.StringVar(value="0")  # 0 = all rows

        # Queue state
        self.queue = []
        self.queue_idx = 0

        # Layout
        row = 0
        tk.Label(master, text="CSV path:").grid(row=row, column=0, sticky="e", padx=6, pady=4)
        tk.Entry(master, textvariable=self.csv_var, width=60).grid(row=row, column=1, sticky="w", padx=6)
        tk.Button(master, text="Browse", command=self.browse_csv).grid(row=row, column=2, padx=6)
        row += 1

        tk.Label(master, text="Template path:").grid(row=row, column=0, sticky="e", padx=6, pady=4)
        tk.Entry(master, textvariable=self.tpl_var, width=60).grid(row=row, column=1, sticky="w", padx=6)
        tk.Button(master, text="Browse", command=self.browse_tpl).grid(row=row, column=2, padx=6)
        row += 1

        tk.Label(master, text="Sender name:").grid(row=row, column=0, sticky="e", padx=6, pady=4)
        tk.Entry(master, textvariable=self.sender_name_var, width=40).grid(row=row, column=1, sticky="w", padx=6)
        row += 1

        tk.Label(master, text="Sender email:").grid(row=row, column=0, sticky="e", padx=6, pady=4)
        tk.Entry(master, textvariable=self.sender_email_var, width=40).grid(row=row, column=1, sticky="w", padx=6)
        row += 1

        tk.Label(master, text="Limit (0 = all):").grid(row=row, column=0, sticky="e", padx=6, pady=4)
        tk.Entry(master, textvariable=self.limit_var, width=10).grid(row=row, column=1, sticky="w", padx=6)
        row += 1

        # Buttons row
        tk.Button(master, text="Build/Refresh Drafts", command=self.build_queue).grid(row=row, column=0, padx=6, pady=8)
        tk.Button(master, text="Open Previews Folder", command=self.open_previews_folder).grid(row=row, column=1, padx=6, pady=8, sticky="w")
        tk.Button(master, text="Zip Drafts…", command=self.zip_drafts).grid(row=row, column=2, padx=6, pady=8)
        row += 1

        # Utilities row
        tk.Button(master, text="Clear Previews", command=self.clear_previews).grid(row=row, column=0, padx=6, pady=4)
        tk.Button(master, text="Reload Count", command=self.reload_count).grid(row=row, column=1, padx=6, pady=4, sticky="w")
        row += 1

        # Status
        self.status_var = tk.StringVar(value="Queue: 0")
        tk.Label(master, textvariable=self.status_var, fg="#333").grid(row=row, column=0, columnspan=3, sticky="w", padx=6, pady=4)
        self.reload_count()

    def browse_csv(self):
        p = filedialog.askopenfilename(
            title="Choose CSV",
            filetypes=[("CSV files", "*.csv"), ("All files", "*.*")],
            initialdir=str((Path(self.csv_var.get()) if self.csv_var.get() else ROOT).parent),
        )
        if p:
            self.csv_var.set(p)

    def browse_tpl(self):
        p = filedialog.askopenfilename(
            title="Choose HTML template",
            filetypes=[("HTML files", "*.html"), ("All files", "*.*")],
            initialdir=str((Path(self.tpl_var.get()) if self.tpl_var.get() else ROOT).parent),
        )
        if p:
            self.tpl_var.set(p)

    def build_queue(self):
        try:
            csv_path = Path(self.csv_var.get()).expanduser().resolve()
            tpl_path = Path(self.tpl_var.get()).expanduser().resolve()
            limit = int(self.limit_var.get() or "0")

            if not csv_path.exists():
                messagebox.showerror("Error", f"CSV not found:\n{csv_path}")
                return
            if not tpl_path.exists():
                messagebox.showerror("Error", f"Template not found:\n{tpl_path}")
                return

            written, out_dir = preview_from_csv(
                csv_path=csv_path,
                template_path=tpl_path,
                out_dir=DEFAULT_PREVIEWS,
                sender_name=self.sender_name_var.get().strip(),
                sender_email=self.sender_email_var.get().strip(),
                limit=limit,
            )
            self.queue = list_eml_queue(DEFAULT_PREVIEWS)
            self.queue_idx = 0
            self._update_status(f"Built {written} draft(s). Queue ready: {len(self.queue)}")
        except Exception as e:
            messagebox.showerror("Error", f"Failed to build drafts:\n{e}")

    def open_previews_folder(self):
        DEFAULT_PREVIEWS.mkdir(parents=True, exist_ok=True)
        try:
            subprocess.run(["open", str(DEFAULT_PREVIEWS)], check=True)
        except Exception as e:
            messagebox.showerror("Error", f"Could not open folder:\n{e}")

    def zip_drafts(self):
        self.queue = list_eml_queue(DEFAULT_PREVIEWS)
        if not self.queue:
            messagebox.showinfo("No drafts", "No .eml files found. Build drafts first.")
            return

        # Choose save path
        initial = ROOT / f"drafts_{Path(self.csv_var.get()).stem or 'batch'}.zip"
        save_path = filedialog.asksaveasfilename(
            title="Save ZIP of drafts",
            defaultextension=".zip",
            initialfile=str(initial.name),
            initialdir=str(ROOT),
            filetypes=[("ZIP files", "*.zip")],
        )
        if not save_path:
            return

        try:
            with zipfile.ZipFile(save_path, "w", compression=zipfile.ZIP_DEFLATED) as zf:
                for p in self.queue:
                    zf.write(p, arcname=p.name)
            messagebox.showinfo("ZIP created", f"Saved: {save_path}")
        except Exception as e:
            messagebox.showerror("Error", f"Could not create ZIP:\n{e}")

    def clear_previews(self):
        if not DEFAULT_PREVIEWS.exists():
            self._update_status("Queue: 0")
            return
        emls = list_eml_queue(DEFAULT_PREVIEWS)
        if not emls:
            self._update_status("Queue: 0")
            return
        if not messagebox.askyesno("Confirm", f"Delete {len(emls)} draft file(s) from previews?"):
            return
        deleted = 0
        for p in emls:
            try:
                p.unlink(missing_ok=True)
                deleted += 1
            except Exception:
                pass
        self._update_status(f"Deleted {deleted} file(s).")
        self.reload_count()

    def reload_count(self):
        self.queue = list_eml_queue(DEFAULT_PREVIEWS)
        self._update_status(f"Queue: {len(self.queue)}")

    def _update_status(self, text: str):
        self.status_var.set(text)


if __name__ == "__main__":
    root = tk.Tk()
    app = LocalSenderUI(root)
    root.mainloop()
