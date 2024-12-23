import "./List.css";
import { useEffect, memo } from "react";

const ListItem = ({ todo, onDelete, onToggle }) => {
  console.log(`ListItem 렌더링 ${todo.content}`);

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

// 고차 컴포넌트
// const MemoizedListItem = memo(ListItem, (prevProps, nextProps) => {
//   if (
//     prevProps.todo.id !== nextProps.todo.id ||
//     prevProps.todo.content !== nextProps.todo.content ||
//     prevProps.todo.isDone !== nextProps.todo.isDone ||
//     prevProps.todo.date !== nextProps.todo.date
//   ) {
//     return false; // 변경된 부분이 있으면 리렌더링
//   }

//   return true; // 변경된 부분이 없으면 리렌더링 하지 않음
// });

const MemoizedListItem = memo(ListItem);

export default MemoizedListItem;
