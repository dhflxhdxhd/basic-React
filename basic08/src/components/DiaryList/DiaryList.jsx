import "./DiaryList.css";
import { useContext } from "react";
import Button from "../Button/Button";
import DiaryListItem from "./DiaryListItem";
import DiaryStateContext from "../../contexts/DiaryStateContext";
const DiaryList = () => {
  const diaries = useContext(DiaryStateContext);

  return (
    <div className="diary-list">
      <div className="diary-list__title">
        <select>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button type="positive" text="새 일기 쓰기"></Button>
      </div>
      <div className="diary-list__items">
        {diaries.length > 0
          ? diaries.map((diary) => {
              return <DiaryListItem key={diary.id} diary={diary} />;
            })
          : null}
      </div>
    </div>
  );
};

export default DiaryList;
