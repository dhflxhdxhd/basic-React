import { useReducer, useEffect } from "react";
import Cookies from "js-cookie";

const initCookieState = (key, initialValue) => {
  const saved = Cookies.get(key);

  try {
    if (saved) {
      const initialData = JSON.parse(saved).map((data) => ({
        ...data,
        createDate: new Date(data.createDate),
      }));
      return initialData;
    } else {
      return initialValue;
    }
  } catch (error) {
    console.error("[ERROR] Failed to parse cookie data:", error);
    return initialValue;
  }
};

function reducer(state, action) {
  switch (action.type) {
    case "WRITE":
      return [action.payload, ...state];
    case "UPDATE":
      return state.map((diary) =>
        String(diary.id) === String(action.payload.id) ? action.payload : diary
      );
    case "DELETE":
      return state.filter((diary) => diary.id != action.payload);
    default:
      throw new Error("[ERROR] unknown action type");
  }
}

const useCookieReducer = (key, initialValue) => {
  const [state, dispatch] = useReducer(reducer, initialValue, () => {
    return initCookieState(key, initialValue);
  });

  useEffect(() => {
    Cookies.set(key, JSON.stringify(state), { expires: 7 });
  }, [key, state]);

  return [state, dispatch];
};

export default useCookieReducer;
