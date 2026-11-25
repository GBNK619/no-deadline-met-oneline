import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Line, No Deadline Met — a single-line joke excusing a missed deadline.
const LINE =
  "I submitted it on time in a parallel universe, but this one has slower Wi-Fi.";

// The sealed scorer accepts UTF-8 text of 1 to 200 characters, not only
// whitespace. Fail loudly instead of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(
    `entry must be 1 to 200 characters, got ${LINE.length}`,
  );
}
if (!LINE.trim()) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE + "\n", "utf8");
console.log(`wrote entry.txt (${LINE.length} characters): ${LINE}`);
