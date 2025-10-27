from pathlib import Path
from typing import Dict
from jinja2 import Environment, FileSystemLoader, select_autoescape


def _env_for(templates_dir: Path) -> Environment:
    return Environment(
        loader=FileSystemLoader(str(templates_dir)),
        autoescape=select_autoescape(["html", "xml"]),
        trim_blocks=True,
        lstrip_blocks=True,
    )


def render_html(template_path: Path, context: Dict[str, str]) -> str:
    env = _env_for(template_path.parent)
    tpl = env.get_template(template_path.name)
    return tpl.render(**context)


def render_subject(subject_template: str, context: Dict[str, str]) -> str:
    env = Environment(autoescape=False)
    tpl = env.from_string(subject_template)
    return tpl.render(**context)
