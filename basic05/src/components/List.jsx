import "./List.css";
import ListItem from "./ListItem";
import { useState } from "react";
import useFilteredTodos from "../hooks/useFilteredTodos";
const List = ({ todos, onDelete, onToggle }) => {
  const [searchText, setSearchText] = useState("");
  const filteredTodos = useFilteredTodos(todos, searchText);
  const onChangeSearch = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="List">
      <h3>To do</h3>
      <input placeholder="검색어를 입력하세요" onChange={onChangeSearch} />
      <div className="content_container">
        {filteredTodos.length > 0
          ? filteredTodos.map((todo, index) => {
              return (
                <ListItem
                  key={todo.id}
                  todo={todo}
                  onDelete={onDelete}
                  onToggle={onToggle}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default List;
