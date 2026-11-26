// Office Artifacts: The One-Line Placard Contest — writes one line to /output/entry.txt
// Gate: 147 chars (max 180), one line, no trailing newline.
// Twist: a stapler as a ritual object that binds souls to deadlines.
import { mkdirSync, writeFileSync } from "node:fs";

const PARTS = [
  "Ritual stapler, c. 1987, pressed",
  "tin and human patience, donated",
  "by the Department of Unfinished",
  "Reports; believed used to bind",
  "souls to deadlines.",
];

const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
