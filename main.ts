// Fortune Cookie Funnies for Engineers — make.fun entry (v2).
//
// v2 replaces the v1 deploy joke with a fresher twist: the bug comes back
// on Monday in disguise. Writes one fortune-cookie line for a software
// engineer to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// The line is 1-120 UTF-8 characters, a single line, no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "You will fix the bug on Friday; it will return on Monday wearing a different error message.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), FORTUNE, "utf8");
