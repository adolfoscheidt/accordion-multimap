import { ToneContextProvider } from "../providers/ToneContextProvider";
import { TuningContextProvider } from "../providers/TuningContextProvider";
import { ControlPanel } from "./control-panel/ControlPanel";
import { KeyboardsPanel } from "./KeyboardsPanel";

export function MultimapBody() {
  return (
    <div className="flex h-full">
      <ToneContextProvider>
        <TuningContextProvider>
          <KeyboardsPanel />
          <ControlPanel />
        </TuningContextProvider>
      </ToneContextProvider>
    </div>
  );
}
