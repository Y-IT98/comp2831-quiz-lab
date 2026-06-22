# COMP 2831 Quiz Lab

An accessible, dependency-free quiz website built from the COMP 2831 course modules and the subject-matched chapters of *Systems Analysis and Design, 13th Edition*.

## Current coverage

| Course page | Module topic | Matching 13th-edition chapter |
| --- | --- | --- |
| Chapter 1 | Introduction to Systems Analysis and Design | Chapter 1 |
| Chapter 2 | Analyzing the Business Case | Chapter 2 |
| Chapter 4 | Requirements Engineering | Chapter 4 |
| Chapter 5 | Data and Process Modeling | Chapter 5 |
| Chapter 6 | Object Modeling | Chapter 6 |
| Chapter 7 | Development Strategies | Chapter 10 |
| Chapter 8 | User Interface Design | Chapter 7 |
| Chapter 10 | System Architecture | Chapter 9 |

The final three mappings follow subject matter because the course modules and the supplied 13th edition use different chapter sequences.

Each chapter has four multiple-choice questions, three true/false questions, and three short-answer questions. A chapter must be completed before submission. Results show a total score, incorrect responses in red, and correct answers in green. Draft answers remain in browser `localStorage` until reset.

## Run locally

No site dependencies are required.

```bash
npm start
```

Then open <http://localhost:4173>.

Run the question-bank validation with:

```bash
npm test
```

## Add another chapter

1. Add a chapter object to `assets/quiz-data.js`.
2. Copy an existing `chapter-N.html` and change its `data-chapter` value.
3. Add the new chapter ID to the expected list in `scripts/verify-data.mjs`.
4. Run `npm test`, then test one correct and one incorrect submission in a browser.

Question types are `mc`, `tf`, and `short`. Short answers use keyword groups: at least one alternative from every group must appear. Use `minimumDistinct` when a prompt accepts any N distinct items from one larger list.

## Re-extract source material

The PDFs are not copied into this repository. To create local text extracts from a parent folder containing the course week folders and textbook:

```bash
python3 -m pip install -r requirements.txt
python3 scripts/extract_sources.py --source-root ..
```

Extracted text is written to `.source-text/`, which is ignored by Git.

## Deployment

The included GitHub Actions workflow deploys the root of `main` to GitHub Pages. In the repository settings, choose **GitHub Actions** as the Pages source if it is not selected automatically.
