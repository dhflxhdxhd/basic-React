import { useState, useEffect, useRef } from "react";
import "./App.css";
import MemoizedHeader from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import { formatDate } from "./utils/dateFormatter";
import useCookieReducer from "./hooks/useCookieReducer";

function App() {
  const [todos, dispatch] = useCookieReducer("todos", []);
  const lastIdx = useRef(0);

  // todo ID 초기화
  useEffect(() => {
    console.log("[update] todos ID");
    lastIdx.current = todos.length > 0 ? todos[0].id + 1 : 0; // idx 값 초기화
  }, []);

  // todo 생성
  const onCreate = (content) => {
    const newTodo = {
      id: lastIdx.current++,
      isDone: false,
      content: content,
      date: formatDate(new Date()),
    };

    dispatch({
      type: "CREATE_TODO",
      payload: newTodo,
    });
  };

  // todo 선택 값 변경
  const onToggle = (id) => {
    dispatch({
      type: "TOGGLE_TODO",
      payload: id,
    });
  };

  // todo 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };

  return (
    <div className="App">
      <MemoizedHeader />
      <Editor onCreate={onCreate} />
      <List todos={todos} onDelete={onDelete} onToggle={onToggle} />
    </div>
  );
}

export default App;
