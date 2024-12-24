import "./App.css";
import { useState } from "react";
import List from "./components/List";
import { ImageSizeContext } from "./contexts/ImageSizeContext";
function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;

  return (
    <div className="App">
      <ImageSizeContext.Provider value={imageSize}>
        <label>
          <input
            type="checkbox"
            checked={isLarge}
            onChange={(event) => {
              setIsLarge(event.target.checked);
            }}
          />
          Use large images
        </label>
        <List imageSize={imageSize} />
      </ImageSizeContext.Provider>
    </div>
  );
}

export default App;
