import { chapters } from "./quiz-data.js";

const grid = document.querySelector("#chapter-grid");
grid.innerHTML = chapters.map((chapter) => `
  <a class="chapter-card" href="chapter-${chapter.id}.html">
    <span class="chapter-number">Chapter ${chapter.id} · ${chapter.module}</span>
    <h2>${chapter.title}</h2>
    <p>${chapter.summary}</p>
    <span class="card-cta">Start quiz →</span>
  </a>
`).join("");
