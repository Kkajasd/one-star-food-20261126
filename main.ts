import { mkdirSync, writeFileSync } from "node:fs";

// One-sentence, one-star review of Earth by an alien tourist who still
// praises the food: a gravity surcharge, a pigeon theft, and a samosa
// that keeps the visitor on the planet an extra week.
const ENTRY =
  "One star: my hotel charged extra for gravity, the pigeons stole my lunch, and then a stranger's samosa made me stay another week.";

function main() {
  validate(ENTRY);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
}

main();

function validate(line) {
  if (typeof line !== "string") throw new Error("entry must be a string");
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) throw new Error("entry must not be only whitespace");
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}
