import { useState, useContext } from "react";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import DiaryList from "../components/DiaryList/DiaryList";
import { formatDateHeader } from "../utils/dateFormatter";
import DiaryStateContext from "../contexts/DiaryStateContext";

const getMonthlyDiaries = (pivotDate, diaries) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();

  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();

  return diaries.filter(
    (diary) =>
      new Date(diary.createDate).getTime() >= beginTime &&
      new Date(diary.createDate).getTime() <= endTime
  );
};

const Home = () => {
  const [pivotDate, setPivotDate] = useState(new Date());

  const diaries = useContext(DiaryStateContext);
  const monthlyDiaries = getMonthlyDiaries(pivotDate, diaries);

  const onClickPreMonth = () => {
    setPivotDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1)
    );
  };

  const onClickNextMonth = () => {
    setPivotDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1)
    );
  };

  return (
    <div>
      <Header
        leftChild={<Button text={"<"} onClickButton={onClickPreMonth} />}
        title={formatDateHeader(pivotDate)}
        rightChild={<Button text={">"} onClickButton={onClickNextMonth} />}
      />
      <DiaryList diaries={monthlyDiaries} />
    </div>
  );
};

export default Home;
