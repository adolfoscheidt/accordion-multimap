import { use } from "react";
import { KeyboardsContext } from "../contexts/KeyboardsContext";

export function useKeyboards() {
  const context = use(KeyboardsContext);
  if (!context)
    throw new Error("useKeyboards must be used within a <KeyboardsContextProvider />");
  return context;
}
