import { Note } from "tonal";
import { ButtonKey } from "../keys/ButtonKey";
import type { ButtonKeyboard } from "./keyboards";
import { useTuning } from "../../hooks/useTuning";
import { useEffect } from "react";

export function ButtonKeyboard({ keyboard }: { keyboard: ButtonKeyboard }) {
  const { keyboardTwoTuning: tuning, setKeyboardTwoTuning: setTuning } =
    useTuning();

  // TODO cleanup tuning when component unmounts or switching keyboards?
  useEffect(() => {
    if (keyboard.tuning && !tuning) setTuning(keyboard.tuning);
  }, [tuning, keyboard.tuning, setTuning]);

  if (keyboard.type === "chromatic") return;

  let openingNotes = keyboard.notes.opening;
  let closingNotes = keyboard.notes.closing;
  // TODO memoize this?
  if (tuning && tuning !== keyboard.tuning) {
    const transposeInterval = Note.distance(keyboard.tuning, tuning);
    openingNotes = keyboard.notes.opening.map((row) =>
      row.map((note) => Note.simplify(Note.transpose(note, transposeInterval))),
    );
    closingNotes = keyboard.notes.closing.map((row) =>
      row.map((note) => Note.simplify(Note.transpose(note, transposeInterval))),
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col-reverse gap-1 items-center">
        {openingNotes.map((row, rowIndex) => {
          return (
            <div className="flex gap-1" key={rowIndex}>
              {row.map((note) => (
                <ButtonKey
                  note={note}
                  pressedColor="green"
                  key={`${note} row ${rowIndex}`}
                />
              ))}
            </div>
          );
        })}
        <h2 className="text-4xl font-bold">Abrindo</h2>
      </div>
      <div className="flex flex-col-reverse gap-1 items-center">
        {closingNotes.map((row, rowIndex) => {
          return (
            <div className="flex gap-1" key={rowIndex}>
              {row.map((note) => (
                <ButtonKey
                  note={note}
                  pressedColor="red"
                  key={`${note} row ${rowIndex}`}
                />
              ))}
            </div>
          );
        })}
        <h2 className="text-4xl font-bold">Fechando</h2>
      </div>
    </div>
  );
}
