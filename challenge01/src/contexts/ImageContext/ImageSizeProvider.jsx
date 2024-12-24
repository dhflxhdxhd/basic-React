import { useState, createContext, Children } from "react";
import { ImageSizeContext } from "../ImageSizeContext";

const ImageSizeProvider = ({ children }) => {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;

  // console.log("ImageSizeProvider rendered");

  return (
    <ImageSizeContext.Provider value={{ imageSize, isLarge, setIsLarge }}>
      {children}
    </ImageSizeContext.Provider>
  );
};

export default ImageSizeProvider;
