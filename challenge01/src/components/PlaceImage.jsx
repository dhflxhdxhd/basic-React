import "./Place.css";
import { getImageUrl } from "../utils/imageUtil";
import { useContext } from "react";
import useImageSizeContext from "../contexts/ImageContext/useImageSizeContext";
// import { ImageSizeContext } from "../contexts/ImageContext/ImageSizeContext";

function PlaceImage({ place }) {
  const { imageSize } = useImageSizeContext();
  // console.log("Place image component rendered");

  //   const imageSize = useContext(ImageSizeContext);
  console.log(imageSize);
  return (
    <img
      className="place-image"
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}

export default PlaceImage;
