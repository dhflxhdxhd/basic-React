import "./DiaryList.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import DiaryListItem from "./DiaryListItem";
import DiaryStateContext from "../../contexts/DiaryStateContext";
const DiaryList = ({ diaries }) => {
  const [sortType, setSortType] = useState("latest");
  const onChangeSortType = (event) => {
    setSortType(event.target.value);
  };

  const nav = useNavigate();
  const onClickWriteBtn = () => {
    nav(`/write`);
  };

  const getSortedDiaries = () => {
    return diaries.toSorted((a, b) => {
      if (sortType === "oldest") {
        return a.createDate - b.createDate;
      } else {
        return b.createDate - a.createDate;
      }
    });
  };

  const sortedDiaries = getSortedDiaries();

  return (
    <div className="diary-list">
      <div className="diary-list__title">
        <select onChange={onChangeSortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button
          type="positive"
          text="새 일기 쓰기"
          onClickButton={onClickWriteBtn}
        ></Button>
      </div>
      <div className="diary-list__items">
        {diaries.length > 0
          ? sortedDiaries.map((diary) => {
              return <DiaryListItem key={diary.id} diary={diary} />;
            })
          : null}
      </div>
    </div>
  );
};

export default DiaryList;
