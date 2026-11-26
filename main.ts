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

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

console.log(entry);
console.log(`characters: ${entry.length}`);
