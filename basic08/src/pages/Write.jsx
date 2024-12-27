import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import DiaryEditor from "../components/DiaryEditor/DiaryEditor";
const Write = () => {
  return (
    <div>
      <Header
        leftChild={<Button text={"뒤로 가기"} />}
        title={"새 일기 쓰기"}
      />
      <DiaryEditor />
    </div>
  );
};

export default Write;
