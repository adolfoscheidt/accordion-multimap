import { useEffect, useRef, useState } from "react";
import { Sampler } from "tone";
import A1 from "./assets/piano-mp3/A1.mp3";

function App() {
  const sampler = useRef<Sampler>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const onSamplerLoaded = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    sampler.current = new Sampler({ A1 }, onSamplerLoaded).toDestination();
  }, []);

  const handleMouseDown = () => sampler.current?.triggerAttack("A1");
  const handleMouseUp = () => sampler.current?.triggerRelease("A1");

  return (
    <div>
      <button
        disabled={!isLoaded}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        Press to play
      </button>
    </div>
  );

  return null;
}

export default App;
