import assert from "node:assert/strict";
import { chapters } from "../assets/quiz-data.js";

assert.deepEqual(chapters.map(({ id }) => id), ["1", "2", "4", "5", "6", "7", "8", "10"]);

for (const chapter of chapters) {
  assert.equal(chapter.questions.length, 25, `Chapter ${chapter.id} should have 25 questions`);
  assert.equal(new Set(chapter.questions.map(({ prompt }) => prompt)).size, 25, `Chapter ${chapter.id} prompts must be unique`);
  const types = chapter.questions.map(({ type }) => type);
  assert.equal(types.filter((type) => type === "mc").length, 14, `Chapter ${chapter.id} should have 14 multiple-choice questions`);
  assert.equal(types.filter((type) => type === "tf").length, 8, `Chapter ${chapter.id} should have 8 true/false questions`);
  assert.equal(types.filter((type) => type === "short").length, 3, `Chapter ${chapter.id} should have 3 short-answer questions`);
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
}

console.log(`Verified ${chapters.length} chapters and ${chapters.reduce((sum, chapter) => sum + chapter.questions.length, 0)} questions.`);
