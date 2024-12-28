import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import DiaryEditor from "../components/DiaryEditor/DiaryEditor";
import DiaryDispatchContext from "../contexts/DiaryDispatchContext";
const Write = () => {
  const { onWrite } = useContext(DiaryDispatchContext);

  const nav = useNavigate();

  const onClickPreBtn = () => {
    nav(-1);
  };

  const clickDoneBtn = (diary) => {
    onWrite(diary);
    nav("/", { replace: true }); // 페이지 뒤로 가기 방지
  };

  return (
    <div>
      <Header
        leftChild={<Button text={"뒤로 가기"} onClickButton={onClickPreBtn} />}
        title={"새 일기 쓰기"}
      />
      <DiaryEditor onSubmit={clickDoneBtn} />
    </div>
  );
};

export default Write;
