import "./Editor.css";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmotionItem from "./EmotionItem";
import { EmotionList } from "../../utils/mockData";
import Button from "../Button/Button";
import DiaryDispatchContext from "../../contexts/DiaryDispatchContext";
import { getStringDate } from "../../utils/dateFormatter";
const DiaryEditor = ({ initData, onSubmit }) => {
  const [diary, setDiary] = useState({
    createDate: new Date(),
    emotionId: 1,
    content: "",
  });

  useEffect(() => {
    if (initData) {
      setDiary(initData);
    }
  }, [initData]);

  const nav = useNavigate();
  const clickCancelBtn = () => {
    nav(-1);
  };

  const onChangeInput = (event) => {
    console.log(event.target.name);

    let name = event.target.name;
    let value = event.target.value;
    if (name === "createDate") {
      value = new Date(value); // Date 객체 변환
    }

    setDiary({
      ...diary,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(diary);
  }, [diary]);
  return (
    <div className="diary-editor">
      <section className="diary-editor__date">
        <div className="diary-editor__title">오늘의 날짜</div>
        <input
          type="date"
          name={"createDate"}
          value={getStringDate(diary.createDate)}
          onChange={onChangeInput}
        />
      </section>
      <section className="diary-editor__emotion">
        <div className="diary-editor__title">오늘의 감정</div>
        <div className="diary-editor__emotion-wrapper">
          {EmotionList.map((emotion) => {
            return (
              <EmotionItem
                onClickEmotionItem={() =>
                  onChangeInput({
                    target: {
                      name: "emotionId",
                      value: emotion.emotionId,
                    },
                  })
                }
                key={emotion.emotionId}
                emotion={emotion}
                isSelected={emotion.emotionId === diary.emotionId}
              />
            );
          })}
        </div>
      </section>
      <section className="diary-editor__content">
        <div className="diary-editor__title">오늘의 일기</div>
        <textarea
          placeholder="하루를 정리해주세요"
          value={diary.content}
          name={"content"}
          onChange={onChangeInput}
        ></textarea>
      </section>
      <section className="diary-editor__button">
        <Button text={"취소하기"} onClickButton={clickCancelBtn} />
        <Button
          type={"positive"}
          text={"작성완료"}
          onClickButton={() => {
            onSubmit(diary);
          }}
        />
      </section>
    </div>
  );
};

export default DiaryEditor;
