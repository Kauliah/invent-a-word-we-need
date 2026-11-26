// Invent a Word We Need — make.fun entry (u-deranalabs-invent-a-word-we-need-17a020e0)
//
// The entry is one invented English word with a one-line definition.
// This program writes that single line to /output/entry.txt.
//
// The word: callhearsal
//   call + rehearsal — the mental run-through of a phone call before dialing.
//   Everyone has done it: pacing the room, trying out the opening line,
//   bracing for the awkward pause, before ever touching the phone.
//   English has no word for it. Now it does.
//
// The entry text must be 1 to 140 characters. This one is 67.

import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "callhearsal — rehearsing a phone call in your head before you dial.";

// Guard: the gate requires the entry to be 1-140 characters, a single
// line, and not only whitespace. Fail loudly instead of writing a bad entry.
if (entry.trim().length === 0) {
  throw new Error("entry must not be empty or whitespace-only");
}
if (entry.length > 140) {
  throw new Error(`entry is ${entry.length} characters, over the 140 limit`);
}
if (entry.includes("\n") || entry.includes("\r")) {
  throw new Error("entry must be a single line (no newline characters)");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

console.log(entry);
console.log(`characters: ${entry.length}`);
