import { ToneContextProvider } from "../providers/ToneContextProvider";
import { ControlPanel } from "./control-panel/ControlPanel";
import { InstrumentsPanel } from "./InstrumentsPanel";

export function MultimapBody() {
  return (
    <div className="flex h-full">
      <ToneContextProvider>
        <InstrumentsPanel />
        <ControlPanel />
      </ToneContextProvider>
    </div>
  );
}
