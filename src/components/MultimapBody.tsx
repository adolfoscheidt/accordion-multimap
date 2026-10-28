import { ToneContextProvider } from "../providers/ToneContextProvider";
import { ControlPanel } from "./control-panel/ControlPanel";
import { KeyboardsPanel } from "./KeyboardsPanel";

export function MultimapBody() {
  return (
    <div className="flex h-full">
      <ToneContextProvider>
        <KeyboardsPanel />
        <ControlPanel />
      </ToneContextProvider>
    </div>
  );
}
