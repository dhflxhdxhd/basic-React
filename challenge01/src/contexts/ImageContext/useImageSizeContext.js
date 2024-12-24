import { useContext } from "react";
import { ImageSizeContext } from "../ImageSizeContext";

const useImageSizeContext = () => {
  const imageSize = useContext(ImageSizeContext);
  if (imageSize === undefined) {
    throw new Error(
      "[Error] useImageSizeContext must be used within a ImageSizeProvider"
    );
  }

  return imageSize;
};

export default useImageSizeContext;
