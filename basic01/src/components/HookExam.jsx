import { useState } from "react";
import useInput from "../hooks/useInput";
/*
3가지 hook 관련 팁
1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
2. 조건문, 반복문 내부에서 호출될 수 없다
3. ** 나만의 훅 (Custom Hook)을 만들 수 있다
*/

const HookExam = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();
  return (
    <div>
      <h1>HOOK</h1>
      <input value={input} onChange={onChange}></input>
      <input value={input2} onChange={onChange2}></input>
    </div>
  );
};

export default HookExam;
