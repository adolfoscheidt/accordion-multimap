import { useEffect, useRef, useState } from "react";
import { Sampler, start } from "tone";
import A1 from "./assets/piano-mp3/A1.mp3";

function onMIDIMessage(event: MIDIMessageEvent) {
  if (!event.data) return;
  let str = `MIDI message received at timestamp ${event.timeStamp.toFixed(0)}[${event.data.length} bytes]: `;
  for (const character of event.data) {
    str += `0x${character.toString(16)} `;
  }
  console.log(str);
}

function startLoggingMIDIInput(midiAccess: MIDIAccess | null) {
  if (!midiAccess) return;
  midiAccess.inputs.forEach((entry) => {
    entry.onmidimessage = onMIDIMessage;
  });
}

function listInputsAndOutputs(midiAccess: MIDIAccess | null) {
  if (!midiAccess) return;
  for (const entry of midiAccess.inputs) {
    const input = entry[1];
    console.log(
      `Input port [type:'${input.type}']` +
        ` id:'${input.id}'` +
        ` manufacturer:'${input.manufacturer}'` +
        ` name:'${input.name}'` +
        ` version:'${input.version}'`,
    );
  }
}

function App() {
  const samplerRef = useRef<Sampler>(null);
  const midiAccessRef = useRef<MIDIAccess>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [midiReady, setMidiReady] = useState(false);

  const onSamplerLoaded = () => {
    setIsLoaded(true);
  };

  const onMIDISuccess = (midiAccess: MIDIAccess) => {
    console.log("MIDI ready!");
    midiAccessRef.current = midiAccess;
    setMidiReady(true);
  };

  const onMIDIFailure = (msg: string) => {
    console.error(`Failed to get MIDI access - ${msg}`);
  };

  useEffect(() => {
    samplerRef.current = new Sampler({ A1 }, onSamplerLoaded).toDestination();
    navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
  }, []);

  const handleMouseDown = () => samplerRef.current?.triggerAttack("A1");
  const handleMouseUp = () => samplerRef.current?.triggerRelease("A1");

  return (
    <div>
      <button
        disabled={!isLoaded}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        Press to play
      </button>
      <button
        disabled={!midiReady}
        onClick={() => listInputsAndOutputs(midiAccessRef.current)}
      >
        Log MIDI inputs
      </button>
      <button onClick={() => startLoggingMIDIInput(midiAccessRef.current)}>
        Listen to MIDI messages
      </button>
    </div>
  );
}

export default App;
