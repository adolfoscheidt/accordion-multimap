import { use } from "react";
import { TuningContext } from "../contexts/TuningContext";

export function useTuning() {
  const context = use(TuningContext);
  if (!context)
    throw new Error(
      "useTuning must be used within a <TuningContextProvider />",
    );
  return context;
}
