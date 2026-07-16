#!/usr/bin/env python3
"""Extract covered module PDFs and matching textbook chapters for quiz authoring.

The generated text is intentionally kept out of Git. Run from the project root:
    python scripts/extract_sources.py --source-root ..
"""

from __future__ import annotations

import argparse
import re
from pathlib import Path

from pypdf import PdfReader


MODULE_GLOB = "week*/Module *.pdf"
TEXTBOOK_GLOB = "*Systems_Analysis_and_Design*.pdf"
# The course slides use an older chapter sequence after Chapter 6. These are
# the subject-matched chapters in the supplied 13th-edition textbook.
TEXTBOOK_CHAPTERS = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11}


def extract_pdf(path: Path) -> str:
    reader = PdfReader(path)
    return "\n\n".join(page.extract_text() or "" for page in reader.pages)


def flatten_outline(items):
    for item in items:
        if isinstance(item, list):
            yield from flatten_outline(item)
        else:
            yield item


def textbook_ranges(reader: PdfReader) -> dict[int, tuple[int, int]]:
    starts: list[tuple[int, int]] = []
    for item in flatten_outline(reader.outline):
        title = getattr(item, "title", "")
        match = re.match(r"Chapter (\d+):", title)
        if match:
            starts.append((int(match.group(1)), reader.get_destination_page_number(item)))

    ranges: dict[int, tuple[int, int]] = {}
    for index, (chapter, start) in enumerate(starts):
        end = starts[index + 1][1] if index + 1 < len(starts) else len(reader.pages)
        ranges[chapter] = (start, end)
    return ranges


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--source-root", type=Path, default=Path(".."))
    parser.add_argument("--output", type=Path, default=Path(".source-text"))
    args = parser.parse_args()

    output = args.output.resolve()
    output.mkdir(parents=True, exist_ok=True)
    module_files = sorted(args.source_root.glob(MODULE_GLOB))
    for module in module_files:
        target = output / f"module-{module.parent.name}.txt"
        target.write_text(extract_pdf(module), encoding="utf-8")
        print(f"Extracted {module} -> {target}")

    textbook = next(args.source_root.glob(TEXTBOOK_GLOB))
    reader = PdfReader(textbook)
    ranges = textbook_ranges(reader)
    for chapter in sorted(TEXTBOOK_CHAPTERS):
        start, end = ranges[chapter]
        text = "\n\n".join(reader.pages[i].extract_text() or "" for i in range(start, end))
        target = output / f"textbook-chapter-{chapter}.txt"
        target.write_text(text, encoding="utf-8")
        print(f"Extracted textbook Chapter {chapter} (pages {start + 1}-{end}) -> {target}")


if __name__ == "__main__":
    main()
