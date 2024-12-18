import { useState } from "react";
import styles from "./Button/Button.module.css";

const Counter = () => {
  const [count, setCount] = useState(0); // arr[2]를 구조분해할당으로 각각 배정
  console.log(count);
  return (
    <div>
      <h1>{count}</h1>
      <button
        className={styles.button}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        PLUS
      </button>
    </div>
  );
};

export default Counter;
