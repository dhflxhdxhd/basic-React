import "./List.css";
import ListItem from "./ListItem";
import { useState } from "react";
const List = ({ todos, onDelete, onSearch, onToggle }) => {
  return (
    <div className="List">
      <h3>To do</h3>
      <input
        placeholder="검색어를 입력하세요"
        onChange={(event) => {
          onSearch(event);
        }}
      />
      <div className="content_container">
        {todos.length > 0
          ? todos.map((value, index) => {
              return (
                <ListItem
                  key={index}
                  todo={value}
                  onDelete={onDelete}
                  onToggle={onToggle}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default List;
