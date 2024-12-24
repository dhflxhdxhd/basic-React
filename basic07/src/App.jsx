import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import "./App.css";
import MemoizedHeader from "./components/Header/Header";
import Editor from "./components/Editor/Editor";
import List from "./components/List/List";
import { formatDate } from "./utils/dateFormatter";
import useCookieReducer from "./hooks/useCookieReducer";
import { TodoStateContext } from "./contexts/TodoStateContext";
import { TodoDispatchContext } from "./contexts/TodoDispatchContext";
import Section from "./components/Temp/Section";
import Heading from "./components/Temp/Heading";

function App() {
  const [todos, dispatch] = useCookieReducer("todos", []);
  const lastIdx = useRef(0);

  // todo ID 초기화
  useEffect(() => {
    console.log("[update] todos ID");
    lastIdx.current = todos.length > 0 ? todos[0].id + 1 : 0; // idx 값 초기화
  }, []);

  // todo 생성
  const onCreate = useCallback((content) => {
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
  }, []);

  // todo 선택 값 변경
  const onToggle = useCallback((id) => {
    dispatch({
      type: "TOGGLE_TODO",
      payload: id,
    });
  }, []);

  // todo 삭제
  const onDelete = useCallback((id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  }, []);

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onToggle, onDelete };
  }, []);

  return (
    <div className="App">
      <MemoizedHeader />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
      {/* <Section>
        <Heading>Title</Heading>
        <Section>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Section>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Section>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section> */}
    </div>
  );
}

export default App;
