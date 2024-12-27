import "./Editor.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import EmotionItem from "./EmotionItem";
import { EmotionList } from "../../utils/mockData";
import Button from "../Button/Button";
import DiaryDispatchContext from "../../contexts/DiaryDispatchContext";
const DiaryEditor = () => {
  const { onWrite } = useContext(DiaryDispatchContext);
  const [diary, setDiary] = useState(null);
  const currentEmotion = 3;

  const nav = useNavigate();
  const clickCancelBtn = () => {
    nav("/");
  };

  const clickDoneBtn = () => {
    onWrite(diary);
    nav("/");
  };
  return (
    <div className="diary-editor">
      <section className="diary-editor__date">
        <div className="diary-editor__title">오늘의 날짜</div>
        <input type="date" name="" id="" />
      </section>
      <section className="diary-editor__emotion">
        <div className="diary-editor__title">오늘의 감정</div>
        <div className="diary-editor__emotion-wrapper">
          {EmotionList.map((emotion) => {
            return (
              <EmotionItem
                key={emotion.id}
                emotion={emotion}
                isSelected={emotion.id === currentEmotion}
              />
            );
          })}
        </div>
      </section>
      <section className="diary-editor__content">
        <div className="diary-editor__title">오늘의 일기</div>
        <textarea placeholder="하루를 정리해주세요"></textarea>
      </section>
      <section className="diary-editor__button">
        <Button text={"취소하기"} onClickButton={clickCancelBtn} />
        <Button
          type={"positive"}
          text={"작성완료"}
          onClickButton={clickDoneBtn}
        />
      </section>
    </div>
  );
};

export default DiaryEditor;
