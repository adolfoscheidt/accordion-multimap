import { Note } from "webmidi";
import { PianoKey } from "../keys/PianoKey";

export function PianoKeyboard({ notes = [] }: { notes: Note[] }) {
  return (
    <div className="flex">
      {notes.map((note) => (
        <PianoKey note={note} key={note.identifier} />
      ))}
    </div>
  );
}
