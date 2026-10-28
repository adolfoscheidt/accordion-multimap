import { ButtonKey } from "../keys/ButtonKey";
import type { ButtonKeyboard } from "./keyboards";

export function ButtonKeyboard({ keyboard }: { keyboard: ButtonKeyboard }) {
  if (keyboard.type === "chromatic") return;
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col-reverse gap-1 items-center">
        {keyboard.notes.opening.map((row, rowIndex) => {
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
        {keyboard.notes.closing.map((row, rowIndex) => {
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
