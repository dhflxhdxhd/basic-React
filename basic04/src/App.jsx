import "./App.css";
import Cookies from "js-cookie";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import { useState, useEffect, useRef } from "react";
import { formatDate } from "./utils/dateFormatter";

function App() {
  const [todos, setTodos] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const lastIdx = useRef(0);
  const isMount = useRef(false);

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

  // mount
  useEffect(() => {
    const savedTodos = Cookies.get("todos");
    if (savedTodos) {
      const parsedTodos = JSON.parse(savedTodos);
      setTodos(parsedTodos);

      lastIdx.current = parsedTodos.length > 0 ? parsedTodos[0].id + 1 : 0; // idx 값 초기화
    }
  }, []);

  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    if (todos.length > 0) {
      Cookies.set("todos", JSON.stringify(todos), { expires: 7 });
    }
  }, [todos]);

  useEffect(() => {
    const searchTodos = todos.filter((todo) =>
      todo.content.includes(searchText)
    );

    setFilteredTodos(searchTodos);
  }, [searchText, todos]);

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
