import "./Place.css";
import { getImageUrl } from "../utils/imageUtil";
import { useContext } from "react";
import { ImageSizeContext } from "../contexts/ImageSizeContext";
function PlaceImage({ place }) {
  const imageSize = useContext(ImageSizeContext);
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
