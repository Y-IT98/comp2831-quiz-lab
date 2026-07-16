import assert from "node:assert/strict";
import { chapters, quizCatalog } from "../assets/quiz-data.js";

assert.deepEqual(chapters.map(({ id }) => id), ["1", "2", "4", "5", "6", "7", "8", "10"]);
assert.equal(quizCatalog.length, 9, "The quiz catalog should include eight chapter quizzes and the final exam");

for (const chapter of quizCatalog) {
  const isFinalExam = chapter.id === "final-exam";
  const expectedTotal = isFinalExam ? 50 : 25;
  const expectedMc = isFinalExam ? 40 : 14;
  const expectedTf = isFinalExam ? 5 : 8;
  const expectedShort = isFinalExam ? 5 : 3;
  assert.equal(chapter.questions.length, expectedTotal, `${chapter.id} should have ${expectedTotal} questions`);
  assert.equal(new Set(chapter.questions.map(({ prompt }) => prompt)).size, expectedTotal, `${chapter.id} prompts must be unique`);
  const types = chapter.questions.map(({ type }) => type);
  assert.equal(types.filter((type) => type === "mc").length, expectedMc, `${chapter.id} should have ${expectedMc} multiple-choice questions`);
  assert.equal(types.filter((type) => type === "tf").length, expectedTf, `${chapter.id} should have ${expectedTf} true/false questions`);
  assert.equal(types.filter((type) => type === "short").length, expectedShort, `${chapter.id} should have ${expectedShort} short-answer questions`);
  const answerPositions = chapter.questions.filter(({ type }) => type === "mc").map(({ answer }) => answer);
  assert.ok(new Set(answerPositions).size >= 3, `Chapter ${chapter.id} should vary multiple-choice answer positions`);
  for (const [index, question] of chapter.questions.entries()) {
    assert.ok(question.prompt, `Chapter ${chapter.id}, Q${index + 1} needs a prompt`);
    assert.ok(question.explanation, `Chapter ${chapter.id}, Q${index + 1} needs feedback`);
    if (question.type === "mc") {
      assert.ok(question.options.length >= 2);
      assert.ok(Number.isInteger(question.answer) && question.answer < question.options.length);
    } else if (question.type === "tf") {
      assert.equal(typeof question.answer, "boolean");
    } else if (question.type === "short") {
      assert.ok(question.keywords.length > 0);
      assert.ok(question.answerText);
    } else {
      assert.fail(`Unknown type in Chapter ${chapter.id}, Q${index + 1}`);
    }
  }
  if (isFinalExam) {
    assert.equal(new Set(chapter.questions.map(({ section }) => section)).size, 5, "Final exam should cover five chapters");
    assert.ok(chapter.questions.every(({ section }) => section), "Final exam questions should identify their source chapter");
  }
}

console.log(`Verified ${quizCatalog.length} quizzes and ${quizCatalog.reduce((sum, chapter) => sum + chapter.questions.length, 0)} questions.`);
