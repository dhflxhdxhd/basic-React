import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import styles from "./components/Button/Button.module.css";
function App() {
  // const state = useState(); // 새로운 state 생성 arr[2] 반환 (value, func)
  // const state = useState(0); // arr[2] state의 현재 값, state를 변화시키는 상태 변화 함수
  const [count, setCount] = useState(0); // arr[2]를 구조분해할당으로 각각 배정
  const [light, setLight] = useState("OFF");
  return (
    <>
      <div>
        <h1>{light}</h1>
        <button
          className={styles.button}
          onClick={() => {
            setLight(light === "ON" ? "OFF" : "ON");
          }}
        >
          {light === "ON" ? "끄기" : "켜기"}
        </button>
      </div>
      <h1>{count}</h1>
      <button
        className={styles.button}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        PLUS
      </button>
    </>
  );
}

export default App;
