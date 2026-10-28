import { PianoKeyboard } from "./keyboards/PianoKeyboard";
import {
  KEYBOARD_DIATONIC_8_BASS,
  KEYBOARD_PIANO_120_BASS,
} from "./keyboards/keyboards";
import { ButtonKeyboard } from "./keyboards/ButtonKeyboard";

export function KeyboardsPanel() {
  return (
    <div className="flex flex-col flex-1 gap-8 p-2 items-center justify-center">
      <PianoKeyboard keyboard={KEYBOARD_PIANO_120_BASS} />
      <ButtonKeyboard keyboard={KEYBOARD_DIATONIC_8_BASS} />
    </div>
  );
}
