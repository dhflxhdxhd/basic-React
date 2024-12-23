import "./List.css";
import MemoizedListItem from "./ListItem";
import { useState, useMemo } from "react";
import useFilteredTodos from "../hooks/useFilteredTodos";
const List = ({ todos, onDelete, onToggle }) => {
  const [searchText, setSearchText] = useState("");
  const filteredTodos = useFilteredTodos(todos, searchText);
  const onChangeSearch = (event) => {
    setSearchText(event.target.value);
  };

  const getAnalyzedData = () => {
    console.log("getAnalyzed");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return { totalCount, doneCount, notDoneCount };
  };

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("getAnalyzed");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return { totalCount, doneCount, notDoneCount };
  }, [todos]); // callback 함수, 의존성배열 deps

  // const { totalCount, doneCount, notDoneCount } = getAnalyzedData();

  return (
    <div className="List">
      <div className="title_container">
        <h3>To do</h3>
        <div className="analyzed_container">
          <div>전체 : {totalCount}</div>
          <div>완료 : {doneCount}</div>
          <div>미완료 : {notDoneCount}</div>
        </div>
      </div>

      <input placeholder="검색어를 입력하세요" onChange={onChangeSearch} />

      <div className="content_container">
        {filteredTodos.length > 0
          ? filteredTodos.map((todo, index) => {
              return (
                <MemoizedListItem
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
