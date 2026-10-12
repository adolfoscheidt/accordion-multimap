import type { ReactNode } from "react";
import { useTone } from "../../hooks/useTone";

type BaseKeyProps = {
  note: string;
  className?: string;
  children?: ReactNode;
};

export function BaseKey({ note, children, className }: BaseKeyProps) {
  const { activeNotes, playNote, stopNote } = useTone();

  return (
    <div
      className={className}
      data-pressed={activeNotes.includes(note)}
      onMouseDown={() => playNote(note)}
      onMouseUp={() => stopNote(note)}
    >
      {children}
    </div>
  );
}
