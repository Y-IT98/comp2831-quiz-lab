import { quizCatalog } from "./quiz-data.js";

const grid = document.querySelector("#chapter-grid");
grid.innerHTML = quizCatalog.map((chapter) => `
  <a class="chapter-card" href="${chapter.href ?? `chapter-${chapter.id}.html`}">
    <span class="chapter-number">${chapter.quizLabel ?? `Chapter ${chapter.id}`} · ${chapter.module}</span>
    <h2>${chapter.title}</h2>
    <p>${chapter.summary}</p>
    <span class="card-cta">Start quiz →</span>
  </a>
`).join("");
