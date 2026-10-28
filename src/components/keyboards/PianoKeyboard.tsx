import { Utilities } from "webmidi";
import { PianoKey } from "../keys/PianoKey";
import type { PianoKeyboard } from "./keyboards";

export function PianoKeyboard({ keyboard }: { keyboard: PianoKeyboard }) {
  const notes = Utilities.buildNoteArray(keyboard.notes);

  return (
    <div className="flex">
      {notes.map((note) => (
        <PianoKey note={note} key={note.identifier} />
      ))}
    </div>
  );
}
