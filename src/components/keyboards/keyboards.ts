import { Range } from "tonal";

export type PianoKeyboard = {
  name: string;
  notes: string[];
};

export type ButtonKeyboard = {
  name: string;
} & (
  | { type: "chromatic"; tuning?: string; notes: string[][] }
  | {
      type: "diatonic";
      tuning: string;
      notes: {
        opening: string[][];
        closing: string[][];
      };
    }
);

export const KEYBOARD_PIANO_120_BASS: PianoKeyboard = {
  name: "Gaita Piano 120 Baixos",
  notes: Range.chromatic(["F3", "A6"], { sharps: true }),
};

export const KEYBOARD_DIATONIC_8_BASS: ButtonKeyboard = {
  name: "Gaita Ponto 8 Baixos",
  type: "diatonic",
  tuning: "G",
  notes: {
    opening: [
      ["D3", "F#3", "A3", "C4", "E4", "F#4", "A4", "C5", "E5", "F#5", "A5"],
      ["G3", "B3", "D4", "F4", "G4", "B4", "D5", "F5", "G5", "B5"],
    ],
    closing: [
      ["B2", "D3", "G3", "B3", "D4", "G4", "B4", "D5", "G5", "B5", "D6"],
      ["E3", "G3", "C4", "E4", "G4", "C5", "E5", "G5", "C6", "E6"],
    ],
  },
};
