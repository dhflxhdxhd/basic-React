import "./List.css";
import ListItem from "./ListItem";
const List = () => {
  return (
    <div className="List">
      <h3>To do</h3>
      <input placeholder="검색어를 입력하세요" />
      <div className="content_container">
        <ListItem />
        <ListItem />
      </div>
    </div>
  );
};

export default List;
