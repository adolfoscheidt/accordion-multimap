import { createContext } from "react";

type ToneContextType = {
  activeNotes: string[];
  playNote: (note: string) => void;
  stopNote: (note: string) => void;
};

export const ToneContext = createContext<ToneContextType | null>(null);
