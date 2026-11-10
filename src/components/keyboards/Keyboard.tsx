import { ButtonKeyboard } from "./ButtonKeyboard";
import { type Keyboard } from "./keyboards";
import { PianoKeyboard } from "./PianoKeyboard";

export function Keyboard({ keyboard }: { keyboard: Keyboard }) {
  if (!keyboard) return null;
  if (keyboard.layout === "piano") return <PianoKeyboard keyboard={keyboard} />;
  return <ButtonKeyboard keyboard={keyboard} />;
}
