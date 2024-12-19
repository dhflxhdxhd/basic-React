import "./List.css";

const ListItem = () => {
  return (
    <div className="ListItem">
      <input type="checkbox" />
      <div className="content">잠자기</div>
      <div className="content_date">2024.12.19</div>
      <button>삭제</button>
    </div>
  );
};

export default ListItem;
