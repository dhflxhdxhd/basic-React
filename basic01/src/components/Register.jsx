import { useState, useEffect, useRef } from "react";
import styles from "./Button/Button.module.css";
/*
간단한 회원가입 폼
1. 이름
2. 생년월일
3. 국적
4. 자기소개
*/

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    birth: "",
    nationality: "",
    bio: "",
  });

  const refObj = useRef(0);
  const countRef = useRef(0);
  const inputRef = useRef({});
  // console.log(refObj); // {current: undefined}, {current: 0};
  // console.log(refObj.current);

  // 비슷한 이벤트핸들러를 하나의 통합된 핸들러로 사용
  const onChange = (event) => {
    countRef.current++;
    console.log(countRef.current);
    console.log(event);
    // 동적 key 값을 객체에 설정
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const onSubmit = () => {
    // console.log(inputRef.current);

    if (userInfo.name === "") {
      // 이름을 입력하는 DOM 요소에 포커스
      inputRef.current["name"].focus();
    } else if (userInfo.birth === "") {
      inputRef.current["birth"].focus();
    } else if (userInfo.nationality === "") {
      inputRef.current["nationality"].focus();
    } else if (userInfo.bio === "") {
      inputRef.current["bio"].focus();
    }
  };

  return (
    <div>
      <button
        className={styles.button}
        onClick={() => {
          refObj.current++;
          console.log(refObj.current);
        }}
      >
        {/* ref+1 */}
        {/* 리렌더링을 유발하지 않음. 따라서 화면 단 변화 x */}
        {refObj.current}
      </button>
      <div>
        <input
          ref={(element) => {
            console.log(element);
            inputRef.current["name"] = element;
          }}
          type="text"
          name="name"
          value={userInfo.name}
          placeholder={"이름"}
          onChange={onChange}
        />
      </div>
      <div>
        <input
          ref={(element) => {
            inputRef.current["birth"] = element;
          }}
          type="date"
          name="birth"
          value={userInfo.birth}
          onChange={onChange}
        />
      </div>
      <div>
        {/* select box는 option 요소의 value 속성을 기반으로 값을 인식.
        즉, value 값을 제어하고 업데이트하는 방식 */}
        <select
          ref={(element) => {
            inputRef.current["nationality"] = element;
          }}
          name="nationality"
          defaultValue={userInfo.nationality}
          onChange={onChange}
        >
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="eng">영국</option>
          <option value="ger">독일</option>
        </select>
      </div>
      <div>
        <textarea
          ref={(element) => {
            inputRef.current["bio"] = element;
          }}
          value={userInfo.bio}
          name="bio"
          onChange={onChange}
        ></textarea>
      </div>

      <button className={styles.button} onClick={onSubmit}>
        제출
      </button>
    </div>
  );
};

export default Register;
