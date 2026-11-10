import { createContext, type Dispatch, type SetStateAction } from "react";
import type { Keyboard } from "../components/keyboards/keyboards";

export type KeyboardsContextType = {
  keyboardOne: Keyboard;
  setKeyboardOne: Dispatch<SetStateAction<Keyboard>>;
  keyboardTwo: Keyboard;
  setKeyboardTwo: Dispatch<SetStateAction<Keyboard>>;
};

export const KeyboardsContext = createContext<KeyboardsContextType | null>(
  null,
);
