import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import DiaryEditor from "../components/DiaryEditor/DiaryEditor";
import DiaryDispatchContext from "../contexts/DiaryDispatchContext";
import DiaryStateContext from "../contexts/DiaryStateContext";
const Edit = () => {
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const diaries = useContext(DiaryStateContext);
  const params = useParams();
  const [currentDiary, setCurrentDiary] = useState();

  const nav = useNavigate();

  useEffect(() => {
    const currentDiary = diaries.find(
      (diary) => String(diary.id) === String(params.id)
    );

    if (!currentDiary) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }

    setCurrentDiary(currentDiary);
  }, [params.id]);

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
