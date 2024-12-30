import { useState, useEffect, useContext } from "react";
import DiaryStateContext from "../contexts/DiaryStateContext";
import { useNavigate } from "react-router-dom";
const useCurrentDiary = (id) => {
  const diaries = useContext(DiaryStateContext);
  const [currentDiary, setCurrentDiary] = useState();
  const nav = useNavigate();

  useEffect(() => {
    const currentDiary = diaries.find(
      (diary) => String(diary.id) === String(id)
    );

    if (!currentDiary) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }

    setCurrentDiary(currentDiary);
  }, [id, diaries]);

  return currentDiary;
};

export default useCurrentDiary;
