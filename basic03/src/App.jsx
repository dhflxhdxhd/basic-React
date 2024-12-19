import "./App.css";
import { useState, useEffect, useRef } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import EvenCard from "./components/EvenCard";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);
  const isMount = useRef(false); // 마운트 여부 확인

  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log("mount");
  }, []); // deps 빈 배열

  // 2. 업데이트 : 변화
  // useEffect(() => {
  //   console.log("update");
  // }); // deps 생략하면 업데이트, 마운트 때 실행 + 리렌더링 될 떄마다 계속 실행

  // 업데이트 시에만 처리하고 싶다면
  useEffect(() => {
    if (!isMount.current) {
      //마운트되지 않았으면 마운트 처리해주고 return
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  // 3. 언마운트 : 죽음

  // useEffect(() => {
  //   console.log(`변화 ${count} / input : ${input}`);
  // }, [count, input]); // 의존성 배열 dependency array (deps)

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <EvenCard /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
