import { useEffect, useId, useRef, useState } from "react";
import { Sampler } from "tone";
import { Input, WebMidi, type NoteMessageEvent } from "webmidi";

import A1 from "./assets/piano-mp3/A1.mp3";
import { DiatonicKeyboard } from "./components/keyboards/DiatonicKeyboard";

const getMidiErrorMessage = (error: unknown) => {
  if (error instanceof DOMException && error.name === "NotAllowedError") {
    return "Cannot access MIDI devices: please authorize MIDI access in your browser settings";
  }
  return `MIDI Error: ${error}`;
};

function App() {
  const samplerRef = useRef<Sampler>(null);
  const [webMidiEnabled, setWebMidiEnabled] = useState(false);
  const [webMidiError, setWebMidiError] = useState(null);
  const [midiInputs, setMidiInputs] = useState<Input[]>([]);
  const [selectedInputValue, setSelectedInputValue] = useState<string>("");
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);
  const midiInputSelectId = useId();

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

    samplerRef.current = new Sampler({ A1 }).toDestination();
  }, []);

  useEffect(() => {
    if (!webMidiEnabled || !selectedInputValue) return undefined;

    const input = WebMidi.getInputById(selectedInputValue);
    const handleNoteOn = (e: NoteMessageEvent) => {
      setPressedKeys((prev) => {
        return [...prev, e.note.identifier];
      });
      samplerRef.current?.triggerAttack(e.note.identifier);
    };

    const handleNoteOff = (e: NoteMessageEvent) => {
      samplerRef.current?.triggerRelease(e.note.identifier);
      setPressedKeys((prev) => {
        return prev.filter((noteId) => noteId !== e.note.identifier);
      });
    };
    input.addListener("noteon", handleNoteOn);
    input.addListener("noteoff", handleNoteOff);

    return () => {
      input.removeListener("noteon", handleNoteOn);
      input.removeListener("noteoff", handleNoteOff);
    };
  }, [selectedInputValue, webMidiEnabled]);

  return (
    <div className="flex flex-col h-screen w-screen">
      <header className="bg-amber-700 h-16 text-white p-2 flex items-center">
        <h1 className="text-3xl font-bold">Accordion Multimap (beta)</h1>
      </header>
      <div className="flex h-full">
        <div className="flex flex-1 p-2 items-center justify-center">
          <DiatonicKeyboard pressedKeys={pressedKeys} />
        </div>
        <div className="flex flex-col gap-3 w-96 bg-slate-100 border-l-2 border-slate-300 p-2">
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
          <hr className="text-slate-300" />
        </div>
      </div>
    </div>
  );
}

export default App;
