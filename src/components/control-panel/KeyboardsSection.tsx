import { useId } from "react";
import { Note, Range } from "tonal";
import { useTuning } from "../../hooks/useTuning";

// Array with all the 12 keys
const keys = Range.chromatic(["C1", "B1"], {
  sharps: true,
  pitchClass: true,
});

export function KeyboardsSection() {
  const selectId = useId();
  const { keyboardTwoTuning, setKeyboardTwoTuning } = useTuning();

  return (
    <section className="flex flex-col gap-1">
      <h2 className="text-xl font-semibold">Keyboards</h2>
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
