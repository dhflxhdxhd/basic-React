import "./DiaryList.css";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import getEmotionImage from "../../utils/getEmotionImage";
import { formatDate } from "../../utils/dateFormatter";
const DiaryListItem = ({ diary }) => {
  const nav = useNavigate();

  const onClickDiaryItem = () => {
    nav(`diary/${diary.id}`);
  };

  const onClickEditBtn = (event) => {
    event.stopPropagation();
    nav(`/edit/${diary.id}`);
  };

  return (
    <div className="diary-item" id={diary.id} onClick={onClickDiaryItem}>
      <div className={`diary-item__img diary-item__img${diary.emotionId}`}>
        <img src={getEmotionImage(diary.emotionId)} alt="emotion" />
      </div>
      <div className="diary-item__content">
        <div>{formatDate(diary.createDate)}</div>
        <div>{diary.content}</div>
      </div>
      <Button text="수정하기" onClickButton={onClickEditBtn} />
    </div>
  );
};

export default DiaryListItem;
