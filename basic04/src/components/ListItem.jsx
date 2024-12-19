import "./List.css";
import { useEffect } from "react";

const ListItem = ({ todo, onDelete, onToggle }) => {
  // unMount
  useEffect(() => {
    return () => {};
  }, []);

  const onClickToggleBtn = () => {
    onToggle(todo.id);
  };

  const onClickDelBtn = () => {
    onDelete(todo.id);
  };

  return (
    <div className="ListItem" id={todo.id}>
      <input
        type="checkbox"
        checked={todo.isDone || false}
        onChange={onClickToggleBtn}
      />
      <div className="content">{todo.content}</div>
      <div className="content_date">{todo.date}</div>
      <button onClick={onClickDelBtn}>삭제</button>
    </div>
  );
};

export default ListItem;
