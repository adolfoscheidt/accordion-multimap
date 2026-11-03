import { type ReactNode, useMemo, useState } from "react";
import { type Tuning, TuningContext } from "../contexts/TuningContext";

export function TuningContextProvider({ children }: { children: ReactNode }) {
  const [keyboardOneTuning, setKeyboardOneTuning] = useState<Tuning>();
  const [keyboardTwoTuning, setKeyboardTwoTuning] = useState<Tuning>();

  const value = useMemo(() => {
    return {
      keyboardOneTuning,
      setKeyboardOneTuning,
      keyboardTwoTuning,
      setKeyboardTwoTuning,
    };
  }, [keyboardOneTuning, keyboardTwoTuning]);

  return <TuningContext value={value}>{children}</TuningContext>;
}
