import assert from "node:assert/strict";
import { chapters } from "../assets/quiz-data.js";

assert.deepEqual(chapters.map(({ id }) => id), ["1", "2", "4", "5", "6", "7", "8", "10"]);

for (const chapter of chapters) {
  assert.equal(chapter.questions.length, 10, `Chapter ${chapter.id} should have 10 questions`);
  assert.equal(new Set(chapter.questions.map((_, index) => index)).size, 10);
  const types = chapter.questions.map(({ type }) => type);
  assert.ok(types.includes("mc"), `Chapter ${chapter.id} needs multiple choice`);
  assert.ok(types.includes("tf"), `Chapter ${chapter.id} needs true/false`);
  assert.ok(types.includes("short"), `Chapter ${chapter.id} needs short answer`);
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
