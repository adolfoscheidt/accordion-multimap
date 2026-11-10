import { useKeyboards } from "../hooks/useKeyboards";
import { Keyboard } from "./keyboards/Keyboard";

export function KeyboardsPanel() {
  const { keyboardOne, keyboardTwo } = useKeyboards();
  return (
    <div className="flex flex-col flex-1 gap-8 p-2 items-center justify-center">
      <Keyboard keyboard={keyboardOne} />
      <Keyboard keyboard={keyboardTwo} />
    </div>
  );
}
