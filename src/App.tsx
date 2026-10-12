import { Header } from "./components/Header";
import { MultimapBody } from "./components/MultimapBody";

function App() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Header />
      <MultimapBody />
    </div>
  );
}

export default App;
