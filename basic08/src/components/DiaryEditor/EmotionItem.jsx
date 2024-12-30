import "./Editor.css";
import getEmotionImage from "../../utils/getEmotionImage";
const EmotionItem = ({ emotion, isSelected = false, onClickEmotionItem }) => {
  console.log(isSelected);
  return (
    <div
      onClick={onClickEmotionItem}
      className={`emotion-item ${
        isSelected ? `emotion_on${emotion.emotionId}` : ""
      }`}
    >
      <img src={getEmotionImage(emotion.emotionId)} alt="emotion" />
      <div>{emotion.name}</div>
    </div>
  );
};

export default EmotionItem;
