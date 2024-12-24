import "./Editor.css";
import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../../contexts/TodoDispatchContext";

const Editor = () => {
  const { onCreate } = useContext(TodoDispatchContext);
  const [todo, setTodo] = useState("");
  const writeRef = useRef(null);
  const writeTodo = (event) => {
    setTodo(event.target.value);
  };

  const onEnterKeyDown = (event) => {
    console.log(event);
    if (event.isComposing || event.keyCode === 229) return;

    if (event.key === "Enter") {
      event.preventDefault();
      clickAddBtn();
    }
  };

  const clickAddBtn = () => {
    if (todo.trim() === "") {
      writeRef.current.focus();
      return;
    }

    onCreate(todo);
    setTodo("");
  };

  return (
    <div className="Editor">
      <input
        ref={writeRef}
        placeholder="할 일을 적어주세요"
        value={todo}
        onChange={writeTodo}
        onKeyDown={onEnterKeyDown}
      />
      <button onClick={clickAddBtn}>추가</button>
    </div>
  );
};

export default Editor;
