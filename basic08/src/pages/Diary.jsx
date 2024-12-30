import { useNavigate, useParams } from "react-router-dom";
import Viewer from "../components/DiaryViewer/Viewer";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import { getStringDate } from "../utils/dateFormatter";
import useCurrentDiary from "../hooks/useCurrentDiary";
import { useEffect } from "react";
import usePageTitle from "../hooks/usePageTitle";

const Diary = () => {
  const params = useParams();
  const currentDiary = useCurrentDiary(params.id);
  const nav = useNavigate();
  usePageTitle(`${params.id}번 일기`);
  const onClickPreBtn = () => {
    nav(-1, { replace: true });
  };
  const onClickEditBtn = () => {
    nav(`/edit/${params.id}`);
  };
  if (!currentDiary) {
    return <div>로딩 중</div>;
  }

  return (
    <div>
      <Header
        leftChild={<Button text={"뒤로 가기"} onClickButton={onClickPreBtn} />}
        title={`${getStringDate(currentDiary.createDate)}의 기록`}
        rightChild={<Button text={"수정하기"} onClickButton={onClickEditBtn} />}
      />
      <Viewer diary={currentDiary} />
    </div>
  );
};

export default Diary;
