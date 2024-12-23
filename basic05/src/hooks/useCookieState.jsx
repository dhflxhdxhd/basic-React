import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const useCookieState = (key, initialValue) => {
  const [state, setState] = useState(() => {
    const saved = Cookies.get(key);

    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    console.log("cookie 설정");
    Cookies.set(key, JSON.stringify(state), { expires: 7 });
  }, [key, state]);

  return [state, setState];
};

export default useCookieState;
