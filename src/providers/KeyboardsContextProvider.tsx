import { useMemo, type ReactNode } from "react";
import { useState } from "react";

import { KeyboardsContext } from "../contexts/KeyboardsContext";
import {
  KEYBOARD_DIATONIC_8_BASS,
  KEYBOARD_PIANO_120_BASS,
  type Keyboard,
} from "../components/keyboards/keyboards";

export function KeyboardsContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [keyboardOne, setKeyboardOne] = useState<Keyboard>(
    KEYBOARD_PIANO_120_BASS,
  );
  const [keyboardTwo, setKeyboardTwo] = useState<Keyboard>(
    KEYBOARD_DIATONIC_8_BASS,
  );

  const value = useMemo(
    () => ({
      keyboardOne,
      setKeyboardOne,
      keyboardTwo,
      setKeyboardTwo,
    }),
    [keyboardOne, keyboardTwo],
  );

  return <KeyboardsContext value={value}>{children}</KeyboardsContext>;
}
