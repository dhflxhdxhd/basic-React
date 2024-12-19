import "./List.css";
import ListItem from "./ListItem";
const List = ({ todos }) => {
  return (
    <div className="List">
      <h3>To do</h3>
      <input placeholder="검색어를 입력하세요" />
      <div className="content_container">
        {todos.map((value, index) => {
          return <ListItem key={index} todo={value} />;
        })}
      </div>
    </div>
  );
};

export default List;
