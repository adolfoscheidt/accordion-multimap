import { useId } from "react";
import { Note, Range } from "tonal";
import { useTuning } from "../../hooks/useTuning";
import { useKeyboards } from "../../hooks/useKeyboards";
import { ALL_KEYBOARDS } from "../keyboards/keyboards";

// Array with all the 12 keys
const keys = Range.chromatic(["C1", "B1"], {
  sharps: true,
  pitchClass: true,
});

export function KeyboardsSection() {
  const selectId = useId();
  const { keyboardTwoTuning, setKeyboardTwoTuning } = useTuning();
  const { keyboardOne, setKeyboardOne, keyboardTwo, setKeyboardTwo } =
    useKeyboards();

  return (
    <section className="flex flex-col gap-1">
      <h2 className="text-xl font-semibold">Keyboards</h2>
      <label htmlFor="keyboard-1">Keyboard 1</label>
      <select
        id="keyboard-1" // TODO: use unique id
        value={keyboardOne?.uuid}
        onChange={(e) => {
          setKeyboardOne(
            ALL_KEYBOARDS.find((keyboard) => keyboard.uuid === e.target.value),
          );
        }}
        className="w-1/2 bg-white border border-black rounded cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
        disabled // Will keep disabled for now, i.e. locked on piano
      >
        <option key="none" value="">
          None
        </option>
        {ALL_KEYBOARDS.map((keyboard) => {
          return (
            <option key={keyboard.uuid} value={keyboard.uuid}>
              {keyboard.name}
            </option>
          );
        })}
      </select>
      <label htmlFor="keyboard-2">Keyboard 2</label>
      <select
        id="keyboard-2" // TODO: use unique id
        value={keyboardTwo?.uuid}
        onChange={(e) => {
          setKeyboardTwo(
            ALL_KEYBOARDS.find((keyboard) => keyboard.uuid === e.target.value),
          );
        }}
        className="w-1/2 bg-white border border-black rounded cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
      >
        <option key="none" value="">
          None
        </option>
        {ALL_KEYBOARDS.map((keyboard) => {
          return (
            <option key={keyboard.uuid} value={keyboard.uuid}>
              {keyboard.name}
            </option>
          );
        })}
      </select>
      {/* TODO: persit value of of chosen tuning in local storage or something */}
      <label htmlFor={selectId}>Tuning</label>
      <select
        id={selectId}
        value={keyboardTwoTuning}
        onChange={(e) => {
          setKeyboardTwoTuning(e.target.value);
        }}
        className="w-1/2 bg-white border border-black rounded cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
        defaultValue={keyboardTwoTuning}
        disabled={!keyboardTwoTuning}
      >
        <option key="none" value="">
          None
        </option>
        {keys.map((key) => {
          return (
            <option key={key} value={key}>
              {`${key}/${Note.transpose(key, "4P")}`}
            </option>
          );
        })}
      </select>
    </section>
  );
}
