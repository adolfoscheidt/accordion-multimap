import { useEffect } from "react";
import { useTone } from "../../hooks/useTone";

const ComputerKeyboardNoteMap: Record<string, string> = {
  z: "E4",
  x: "F4",
  c: "G4",
  f: "G#4",
  v: "A4",
  b: "B4",
  n: "C5",
};

export function ComputerKeyboardSection() {
  const { playNote, stopNote } = useTone();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.repeat) return;
      const noteId = ComputerKeyboardNoteMap[e.key];
      playNote(noteId);
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.repeat) return;
      const noteId = ComputerKeyboardNoteMap[e.key];
      stopNote(noteId);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [playNote, stopNote]);

  return (
    <section className="flex flex-col gap-1">
      <h2 className="text-xl font-semibold">Computer Keyboard (WIP)</h2>
    </section>
  );
}
