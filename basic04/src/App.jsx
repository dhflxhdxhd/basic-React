import { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import { formatDate } from "./utils/dateFormatter";
import useCookieState from "./hooks/useCookieState";
import useFilteredTodos from "./hooks/useFilteredTodos";

function App() {
  const [todos, setTodos] = useCookieState("todos", []);
  const [searchText, setSearchText] = useState("");
  const filteredTodos = useFilteredTodos(todos, searchText);

  const lastIdx = useRef(0);

  // 할 일 추가
  const onCreate = (content) => {
    const newTodo = {
      id: lastIdx.current++,
      isDone: false,
      content: content,
      date: formatDate(new Date()),
    };

    setTodos([newTodo, ...todos]);
  };

  const onToggle = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );

    setTodos(updatedTodos);
  };
  // 할 일 삭제
  const onDelete = (id) => {
    console.log(id);
    const updateTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(updateTodos);
  };

  // 할 일 검색
  const onSearch = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    lastIdx.current = todos.length > 0 ? todos[0].id + 1 : 0; // idx 값 초기화
  }, [todos]);

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List
        todos={filteredTodos}
        onDelete={onDelete}
        onSearch={onSearch}
        onToggle={onToggle}
      />
    </div>
  );
}

export default App;
