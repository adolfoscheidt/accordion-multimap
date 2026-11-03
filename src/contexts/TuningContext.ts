import { createContext, type Dispatch, type SetStateAction } from "react";

export type Tuning = string | undefined;
export type TuningSetter = Dispatch<SetStateAction<Tuning>>;

type TuningContextType = {
  keyboardOneTuning: Tuning;
  setKeyboardOneTuning: TuningSetter;
  keyboardTwoTuning: Tuning;
  setKeyboardTwoTuning: TuningSetter;
};

export const TuningContext = createContext<TuningContextType | null>(null);
