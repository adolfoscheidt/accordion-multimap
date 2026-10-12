import { Utilities, type Note } from "webmidi";
import { DiatonicKeyboard } from "./keyboards/DiatonicKeyboard";
import { PianoKeyboard } from "./keyboards/PianoKeyboard";

function buildNoteRange(start: Note, end: Note): Note[] {
  const startNumber = start.number;
  const endNumber = end.number;

  const numberRange: number[] = [];
  for (let i = startNumber; i <= endNumber; i++) {
    numberRange.push(i);
  }

  return Utilities.buildNoteArray(numberRange);
}

const exampleRange = buildNoteRange(
  Utilities.buildNote("B2"),
  Utilities.buildNote("E6"),
);

export function InstrumentsPanel() {
  return (
    <div className="flex flex-col flex-1 gap-8 p-2 items-center justify-center">
      <PianoKeyboard notes={exampleRange} />
      <DiatonicKeyboard />
    </div>
  );
}
