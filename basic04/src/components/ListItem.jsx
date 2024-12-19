import "./List.css";

const ListItem = ({ todo }) => {
  return (
    <div className="ListItem" id={todo.id}>
      <input type="checkbox" checked={todo.isDone} />
      <div className="content">{todo.content}</div>
      <div className="content_date">{todo.date}</div>
      <button>삭제</button>
    </div>
  );
};

export default ListItem;
