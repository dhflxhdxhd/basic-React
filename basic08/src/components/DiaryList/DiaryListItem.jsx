import "./DiaryList.css";
import getEmotionImage from "../../utils/getEmotionImage";
import Button from "../Button/Button";
const DiaryListItem = ({ diary }) => {
  const emotionId = 1;
  return (
    <div className="diary-item">
      <div className={`diary-item__img diary-item__img${diary.emotionId}`}>
        <img src={getEmotionImage(diary.emotionId)} alt="emotion" />
      </div>
      <div className="diary-item__content">
        <div>{diary.createDate}</div>
        <div>{diary.content}</div>
      </div>
      <Button text="수정하기" />
    </div>
  );
};

export default DiaryListItem;
