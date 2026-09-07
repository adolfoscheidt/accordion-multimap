import { Note } from "webmidi";
import "./piano.css";

function NaturalKey({ pressed = false }) {
  return <div className="natural-key" data-pressed={pressed} />;
}

function AccidentalKey({ pressed = false }) {
  return <div className="accidental-key" data-pressed={pressed} />;
}

function Key({ note, pressed }: { note: Note; pressed?: boolean }) {
  const isAccidental = note.accidental;
  return isAccidental ? (
    <AccidentalKey pressed={pressed} />
  ) : (
    <NaturalKey pressed={pressed} />
  );
}

export function Piano({
  notes = [],
  pressedKeys = [],
}: {
  notes: Note[];
  pressedKeys: string[];
}) {
  return (
    <div className="piano">
      {notes.map((note) => (
        <Key
          note={note}
          key={note.identifier}
          pressed={pressedKeys.includes(note.identifier)}
        />
      ))}
    </div>
  );
}
