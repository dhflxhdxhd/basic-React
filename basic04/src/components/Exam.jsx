import { useEffect, useReducer } from "react";

function reducer(state, action) {
  //   if (action.type === "INCREASE") {
  //     return state + action.data;
  //   } else if (action.type === "DECREASE") {
  //     return state + action.data;
  //   }

  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      state;
  }
}

const Exam = () => {
  // dispatch : 상태변화가 있어야 한다는 사실을 알려주는 함수
  const [state, dispatch] = useReducer(reducer, 0);
  const onClickPlus = () => {
    // 인수 : 상태가 어떻게 변하길 원하는지

    dispatch({
      // 액션 객체
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({ type: "DECREASE", data: 1 });
  };

  useEffect(() => {
    console.log("state 변경");
  }, [state]);

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
