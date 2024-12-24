import "./App.css";
import { useState } from "react";
import List from "./components/List";
import ImageSizeProvider from "./contexts/ImageContext/ImageSizeProvider";
import ImageSizeToggle from "./components/ImageSizeToggle";
function App() {
  return (
    <div className="App">
      <ImageSizeProvider>
        <ImageSizeToggle />
        <List />
      </ImageSizeProvider>
    </div>
  );
}

export default App;
