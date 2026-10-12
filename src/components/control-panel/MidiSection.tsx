import { useEffect, useId, useState } from "react";
import { Input, WebMidi, type NoteMessageEvent } from "webmidi";
import { useTone } from "../../hooks/useTone";

const getMidiErrorMessage = (error: unknown) => {
  if (error instanceof DOMException && error.name === "NotAllowedError") {
    return "Cannot access MIDI devices: please authorize MIDI access in your browser settings";
  }
  return `MIDI Error: ${error}`;
};

export function MidiSection() {
  const [webMidiEnabled, setWebMidiEnabled] = useState(false);
  const [webMidiError, setWebMidiError] = useState(null);
  const [midiInputs, setMidiInputs] = useState<Input[]>([]);
  const [selectedInputValue, setSelectedInputValue] = useState<string>("");
  const midiInputSelectId = useId();
  const { playNote, stopNote } = useTone();

  useEffect(() => {
    WebMidi.enable()
      .then(() => {
        console.log("WebMidi successfuly enabled!");
        setWebMidiEnabled(true);
        setMidiInputs(WebMidi.inputs); // TODO: handle updating this on device change (e.g. disconnect/connect)
      })
      .catch((err) => {
        console.error("Could not enable WebMidi", err);
        setWebMidiError(err);
      });
  }, []);

  useEffect(() => {
    if (!webMidiEnabled) return;

    const handleNoteOn = (e: NoteMessageEvent) => {
      playNote(e.note.identifier);
    };

    const handleNoteOff = (e: NoteMessageEvent) => {
      stopNote(e.note.identifier);
    };

    let input: Input | undefined;
    if (selectedInputValue) input = WebMidi.getInputById(selectedInputValue);

    input?.addListener("noteon", handleNoteOn);
    input?.addListener("noteoff", handleNoteOff);

    return () => {
      input?.removeListener("noteon", handleNoteOn);
      input?.removeListener("noteoff", handleNoteOff);
    };
  }, [selectedInputValue, webMidiEnabled, playNote, stopNote]);

  return (
    <section className="flex flex-col gap-1">
      <h2 className="text-xl font-semibold">MIDI Config</h2>
      {webMidiError && (
        <p className="bg-red-200 text-red-900 p-2 rounded">
          {getMidiErrorMessage(webMidiError)}
        </p>
      )}
      {/* TODO: persit value of of chosen input in local storage or something */}
      <label htmlFor={midiInputSelectId}>Select your MIDI device:</label>
      <select
        id={midiInputSelectId}
        value={selectedInputValue}
        onChange={(e) => setSelectedInputValue(e.target.value)}
        className="w-1/2 bg-white border border-black rounded cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
        disabled={!webMidiEnabled}
      >
        <option value="">None</option>
        {midiInputs.map((input) => {
          return (
            <option key={input.id} value={input.id}>
              {input.name}
            </option>
          );
        })}
      </select>
    </section>
  );
}
