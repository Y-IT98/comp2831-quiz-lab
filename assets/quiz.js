import { chapterById } from "./quiz-data.js";

const chapter = chapterById(document.body.dataset.chapter);
const form = document.querySelector("#quiz-form");
const scoreBox = document.querySelector("#score");
const progressText = document.querySelector("#progress-text");
const progressBar = document.querySelector("#progress-bar");
const progressTrack = progressBar.parentElement;
const storageKey = `comp2831-quiz-${chapter.id}`;
const typeLabel = { mc: "Multiple choice", tf: "True or false", short: "Short answer" };

document.title = `Chapter ${chapter.id}: ${chapter.title} | COMP 2831 Quiz`;
document.querySelector("#chapter-kicker").textContent = `${chapter.module} · Chapter ${chapter.id}`;
document.querySelector("#chapter-title").textContent = chapter.title;
document.querySelector("#chapter-summary").textContent = chapter.summary;
document.querySelector("#textbook-map").textContent = chapter.textbookChapter;
document.querySelector("#question-count").textContent = `${chapter.questions.length} questions`;
progressTrack.setAttribute("aria-valuemax", chapter.questions.length);

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;").replaceAll("'", "&#039;");

const renderOptions = (question, index) => {
  const options = question.type === "tf" ? ["True", "False"] : question.options;
  return `<div class="options">${options.map((option, optionIndex) => `
    <label class="option" data-option="${optionIndex}">
      <input type="radio" name="q-${index}" value="${optionIndex}">
      <span>${escapeHtml(option)}</span>
    </label>
  `).join("")}</div>`;
};

form.insertAdjacentHTML("afterbegin", chapter.questions.map((question, index) => `
  <fieldset class="question" data-index="${index}">
    <legend><span class="q-kicker">Question ${index + 1} · ${typeLabel[question.type]}</span>${escapeHtml(question.prompt)}</legend>
    ${question.type === "short"
      ? `<label class="q-kicker" for="q-${index}-text">Your answer</label><textarea id="q-${index}-text" name="q-${index}" autocomplete="off"></textarea>`
      : renderOptions(question, index)}
    <div class="answer-box" aria-live="polite"></div>
  </fieldset>
`).join(""));

const normalize = (value) => ` ${String(value).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim()} `;
const contains = (answer, keyword) => answer.includes(normalize(keyword));

function gradeShort(question, value) {
  const answer = normalize(value);
  if (question.minimumDistinct) {
    const terms = [...new Set(question.keywords.flat())];
    return terms.filter((term) => contains(answer, term)).length >= question.minimumDistinct;
  }
  return question.keywords.every((alternatives) => alternatives.some((term) => contains(answer, term)));
}

function responseAt(index) {
  const question = chapter.questions[index];
  if (question.type === "short") return form.elements[`q-${index}`].value.trim();
  return form.querySelector(`input[name="q-${index}"]:checked`)?.value ?? "";
}

function isAnswered(index) { return responseAt(index) !== ""; }

function updateProgress() {
  const answered = chapter.questions.filter((_, index) => isAnswered(index)).length;
  progressText.textContent = `${answered} of ${chapter.questions.length} answered`;
  progressBar.style.width = `${answered / chapter.questions.length * 100}%`;
  progressTrack.setAttribute("aria-valuenow", answered);
}

function saveAnswers() {
  const answers = chapter.questions.map((_, index) => responseAt(index));
  localStorage.setItem(storageKey, JSON.stringify(answers));
  updateProgress();
}

function restoreAnswers() {
  let answers;
  try { answers = JSON.parse(localStorage.getItem(storageKey)); } catch { return; }
  if (!Array.isArray(answers)) return;
  answers.forEach((value, index) => {
    if (!value) return;
    const question = chapter.questions[index];
    if (question.type === "short") form.elements[`q-${index}`].value = value;
    else {
      const input = form.querySelector(`input[name="q-${index}"][value="${value}"]`);
      if (input) input.checked = true;
    }
  });
}

function correctOptionIndex(question) {
  if (question.type === "tf") return question.answer ? 0 : 1;
  return question.answer;
}

function gradeQuestion(question, response) {
  if (question.type === "short") return gradeShort(question, response);
  return Number(response) === correctOptionIndex(question);
}

form.addEventListener("input", saveAnswers);
restoreAnswers();
updateProgress();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstMissing = chapter.questions.findIndex((_, index) => !isAnswered(index));
  const notice = document.querySelector("#form-notice");
  if (firstMissing >= 0) {
    notice.textContent = `Answer all questions before submitting. Question ${firstMissing + 1} is incomplete.`;
    form.querySelector(`[data-index="${firstMissing}"]`).scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  notice.textContent = "";
  let correct = 0;
  chapter.questions.forEach((question, index) => {
    const response = responseAt(index);
    const passed = gradeQuestion(question, response);
    if (passed) correct += 1;
    const fieldset = form.querySelector(`[data-index="${index}"]`);
    const answerBox = fieldset.querySelector(".answer-box");
    fieldset.classList.toggle("correct", passed);
    fieldset.classList.toggle("incorrect", !passed);
    answerBox.className = `answer-box show ${passed ? "good" : "bad"}`;
    answerBox.innerHTML = passed
      ? `<p><strong>Correct.</strong> ${escapeHtml(question.explanation)}</p>`
      : `<p><strong>Incorrect.</strong> ${escapeHtml(question.explanation)}</p><p class="correct-copy">Correct answer: ${escapeHtml(question.answerText ?? (question.type === "tf" ? String(question.answer ? "True" : "False") : question.options[question.answer]))}</p>`;

    if (question.type !== "short") {
      fieldset.querySelectorAll(".option").forEach((label, optionIndex) => {
        label.classList.toggle("correct-answer", optionIndex === correctOptionIndex(question));
        label.classList.toggle("wrong-answer", !passed && label.querySelector("input").checked);
      });
    }
  });
  const percentage = Math.round(correct / chapter.questions.length * 100);
  scoreBox.classList.add("show");
  scoreBox.innerHTML = `<span class="q-kicker">Chapter ${chapter.id} result</span><strong>${correct}/${chapter.questions.length} · ${percentage}%</strong><p>Review the marked questions below. Correct answers are green; incorrect responses are red.</p>`;
  scoreBox.scrollIntoView({ behavior: "smooth", block: "center" });
});

document.querySelector("#reset-quiz").addEventListener("click", () => {
  if (!window.confirm("Clear every answer and result for this chapter?")) return;
  form.reset();
  localStorage.removeItem(storageKey);
  scoreBox.classList.remove("show");
  form.querySelectorAll(".question").forEach((item) => item.classList.remove("correct", "incorrect"));
  form.querySelectorAll(".answer-box").forEach((item) => { item.className = "answer-box"; item.innerHTML = ""; });
  form.querySelectorAll(".option").forEach((item) => item.classList.remove("correct-answer", "wrong-answer"));
  updateProgress();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
