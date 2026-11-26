// One star, five stars for the food: a deadpan travel critic from another
// planet reviews Earth. The hotel charged extra for gravity, the pigeons
// stole lunch — and then one stranger's samosa earned the fifth star and
// another week. The alien voice is the point: flat and literal about the
// absurd, won over by a single act of generosity.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "One star: my hotel charged extra for gravity, the pigeons stole my lunch, and then a stranger's samosa made me stay another week.";

// The gate only accepts UTF-8 text of 1-200 characters, so refuse to emit
// anything outside that range instead of shipping an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${ENTRY.length} is outside the 1-200 char gate`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
// One sentence, one verdict: the review is a single breath from the critic.
if (!ENTRY.endsWith(".")) {
  throw new Error("entry must end with a full stop");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
