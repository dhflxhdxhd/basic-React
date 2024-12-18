import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer number={number} />
      </section>
      <section>
        <Controller />
      </section>
    </div>
  );
}

export default App;
