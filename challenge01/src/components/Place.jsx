import "./Place.css";
import PlaceImage from "./PlaceImage";

function Place({ place }) {
  return (
    <div className="place-container">
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {": " + place.description}
      </p>
    </div>
  );
}

export default Place;
