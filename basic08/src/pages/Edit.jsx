import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import DiaryEditor from "../components/DiaryEditor/DiaryEditor";
import DiaryDispatchContext from "../contexts/DiaryDispatchContext";
import useCurrentDiary from "../hooks/useCurrentDiary";
import usePageTitle from "../hooks/usePageTitle";
const Edit = () => {
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const params = useParams();
  const currentDiary = useCurrentDiary(params.id);
  const nav = useNavigate();
  usePageTitle(`${params.id}번 일기 수정하기`);

  const onClickDoneBtn = (diary) => {
    onUpdate(diary);
    nav("/", { replace: true });
  };

  const onClickPreBtn = () => {
    nav(-1);
  };

  const onClickDelBtn = () => {
    let check = window.confirm("일기를 삭제할까요? 다시 복구되지 않아요!");
    if (check) {
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        leftChild={<Button text={"뒤로 가기"} onClickButton={onClickPreBtn} />}
        title={"일기 수정하기"}
        rightChild={
          <Button
            type={"negative"}
            text={"삭제하기"}
            onClickButton={onClickDelBtn}
          />
        }
      />
      <DiaryEditor initData={currentDiary} onSubmit={onClickDoneBtn} />
    </div>
  );
};

export default Edit;
