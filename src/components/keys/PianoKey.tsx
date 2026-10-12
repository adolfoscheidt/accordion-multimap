import { Note } from "webmidi";
import "./piano-key.css";
import { BaseKey } from "./BaseKey";

export function PianoKey({ note, label }: { note: Note; label?: string }) {
  const isAccidental = note.accidental;

  return (
    <BaseKey
      note={note.identifier}
      className={isAccidental ? "accidental-key" : "natural-key"}
    >
      {label && <span>{label}</span>}
    </BaseKey>
  );
}
