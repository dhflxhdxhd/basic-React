import { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import { formatDate } from "./utils/dateFormatter";
import useCookieState from "./hooks/useCookieState";

function App() {
  const [todos, setTodos] = useCookieState("todos", []);
  const lastIdx = useRef(0);

  // todo 생성
  useEffect(() => {
    lastIdx.current = todos.length > 0 ? todos[0].id + 1 : 0; // idx 값 초기화
  }, [todos]);

  const onCreate = (content) => {
    const newTodo = {
      id: lastIdx.current++,
      isDone: false,
      content: content,
      date: formatDate(new Date()),
    };

    setTodos([newTodo, ...todos]);
  };

  // todo 선택 값 변경
  const onToggle = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );

    setTodos(updatedTodos);
  };
  // todo 삭제
  const onDelete = (id) => {
    const updateTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(updateTodos);
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onDelete={onDelete} onToggle={onToggle} />
    </div>
  );
}

export default App;
