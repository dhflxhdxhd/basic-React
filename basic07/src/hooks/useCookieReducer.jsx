import Cookies from "js-cookie";
import { useReducer, useEffect } from "react";

const initCookieState = (key, initialValue) => {
  const saved = Cookies.get(key);

  try {
    return saved ? JSON.parse(saved) : initialValue;
  } catch (error) {
    console.error("[ERROR] Failed to parse cookie data:", error);
    return initialValue;
  }
};

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_TODO":
      return [action.payload, ...state];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id != action.payload);
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    default:
      throw new Error("[ERROR] unknown action type");
  }
}

const useCookieReducer = (key, initialValue) => {
  const [state, dispatch] = useReducer(reducer, initialValue, () => {
    return initCookieState(key, initialValue);
  });

  useEffect(() => {
    console.log(state);
    Cookies.set(key, JSON.stringify(state), { expires: 7 });
  }, [key, state]);

  return [state, dispatch];
};

export default useCookieReducer;
