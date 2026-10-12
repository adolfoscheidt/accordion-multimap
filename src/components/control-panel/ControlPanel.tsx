import { ComputerKeyboardSection } from "./ComputerKeyboardSection";
import { MidiSection } from "./MidiSection";

export function ControlPanel() {
  return (
    <div className="flex flex-col gap-3 w-96 bg-slate-100 border-l-2 border-slate-300 p-2">
      <MidiSection />
      <hr className="text-slate-300" />
      <ComputerKeyboardSection />
      <hr className="text-slate-300" />
    </div>
  );
}
