import { useState, useEffect } from "react";

const useFilteredTodos = (todos, searchText) => {
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    const searchTodos = todos.filter((todo) =>
      todo.content.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredTodos(searchTodos);
  }, [searchText, todos]);

  return filteredTodos;
};

export default useFilteredTodos;
