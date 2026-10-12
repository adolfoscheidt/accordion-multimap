import { useCallback, type ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { Sampler } from "tone";

import A1 from "./../assets/piano-mp3/A1.mp3";
import A2 from "./../assets/piano-mp3/A2.mp3";
import A3 from "./../assets/piano-mp3/A3.mp3";
import A4 from "./../assets/piano-mp3/A4.mp3";
import A5 from "./../assets/piano-mp3/A5.mp3";
import A6 from "./../assets/piano-mp3/A6.mp3";

import { ToneContext } from "../contexts/ToneContext";

export function ToneContextProvider({ children }: { children: ReactNode }) {
  const samplerRef = useRef<Sampler>(null);
  const [activeNotes, setActiveNotes] = useState<string[]>([]);

  useEffect(() => {
    samplerRef.current = new Sampler({
      A1,
      A2,
      A3,
      A4,
      A5,
      A6,
    }).toDestination();
  }, []);

  const playNote = useCallback((noteId: string) => {
    if (!noteId) return;
    setActiveNotes((prev) => {
      return [...prev, noteId];
    });
    samplerRef.current?.triggerAttack(noteId);
  }, []);

  const stopNote = useCallback((noteId: string) => {
    if (!noteId) return;
    setActiveNotes((prev) => {
      return prev.filter((_noteId) => _noteId !== noteId);
    });
    samplerRef.current?.triggerRelease(noteId);
  }, []);

  return (
    <ToneContext value={{ activeNotes, playNote, stopNote }}>
      {children}
    </ToneContext>
  );
}
