import "./Editor.css";
import getEmotionImage from "../../utils/getEmotionImage";
const EmotionItem = ({ emotion, isSelected = false }) => {
  console.log(isSelected);
  return (
    <div
      className={`emotion-item ${isSelected ? `emotion_on${emotion.id}` : ""}`}
    >
      <img src={getEmotionImage(emotion.id)} alt="emotion" />
      <div>{emotion.name}</div>
    </div>
  );
};

export default EmotionItem;
