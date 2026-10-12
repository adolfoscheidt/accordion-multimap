import { use } from "react";
import { ToneContext } from "../contexts/ToneContext";

export function useTone() {
  const context = use(ToneContext);
  if (!context)
    throw new Error("useTone must be used within a <ToneContextProvider />");
  return context;
}
