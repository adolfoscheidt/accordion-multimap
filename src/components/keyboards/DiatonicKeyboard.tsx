import { ButtonKey } from "../ButtonKey";

const firstRowNotesOpening = [
  "D3",
  "F#3",
  "A3",
  "C4",
  "E4",
  "F#4",
  "A4",
  "C5",
  "E5",
  "F#5",
  "A5",
];
const firstRowNotesClosing = [
  "B2",
  "D3",
  "G3",
  "B3",
  "D4",
  "G4",
  "B4",
  "D5",
  "G5",
  "B5",
  "D6",
];
const secondRowNotesOpening = [
  "G3",
  "B3",
  "D4",
  "F4",
  "G4",
  "B4",
  "D5",
  "F5",
  "G5",
  "B5",
];
const secondRowNotesClosing = [
  "E3",
  "G3",
  "C4",
  "E4",
  "G4",
  "C5",
  "E5",
  "G5",
  "C6",
  "E6",
];

export function DiatonicKeyboard({
  pressedKeys = [],
}: {
  pressedKeys?: string[];
}) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col-reverse gap-1 items-center">
        <div className="flex gap-1">
          {firstRowNotesOpening.map((noteId) => {
            return (
              <ButtonKey
                key={noteId}
                note={noteId}
                pressed={pressedKeys.includes(noteId)}
                pressedColor="blue"
              />
            );
          })}
        </div>
        <div className="flex gap-1">
          {secondRowNotesOpening.map((noteId) => {
            return (
              <ButtonKey
                key={noteId}
                note={noteId}
                pressed={pressedKeys.includes(noteId)}
                pressedColor="blue"
              />
            );
          })}
        </div>
        <h2 className="text-6xl font-bold">Abrindo</h2>
      </div>
      <div className="flex flex-col-reverse gap-1 items-center">
        <div className="flex gap-1">
          {firstRowNotesClosing.map((noteId) => {
            return (
              <ButtonKey
                key={noteId}
                note={noteId}
                pressed={pressedKeys.includes(noteId)}
                pressedColor = 'yellow'
              />
            );
          })}
        </div>
        <div className="flex gap-1">
          {secondRowNotesClosing.map((noteId) => {
            return (
              <ButtonKey
                key={noteId}
                note={noteId}
                pressed={pressedKeys.includes(noteId)}
                pressedColor = 'yellow'
              />
            );
          })}
        </div>
        <h2 className="text-6xl font-bold">Fechando</h2>
      </div>
    </div>
  );
}
