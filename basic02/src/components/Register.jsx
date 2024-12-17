import { useState, useEffect } from "react";
/*
간단한 회원가입 폼
1. 이름
2. 생년월일
3. 국적
4. 자기소개
*/

const Register = () => {
  const [name, setName] = useState("김콜라");
  const [birth, setBirth] = useState("2024-12-03");
  const [nationality, setNationality] = useState("kr");
  const [bio, setBio] = useState("");

  const onChangeName = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const onClickInput = () => {
    setName("");
  };

  const onChangeBirth = (event) => {
    setBirth(event.target.value);
  };

  const onChangeNationality = (event) => {
    setNationality(event.target.value);
  };

  const onChangeBio = (event) => {
    setBio(event.target.value);
  };

  //   useEffect(() => {
  //     console.log(birth);
  //   }, [birth]);

  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
          placeholder={"이름"}
          onChange={onChangeName}
          onClick={onClickInput}
        />
      </div>
      <div>
        <input type="date" value={birth} onChange={onChangeBirth} />
      </div>
      <div>
        {/* select box는 option 요소의 value 속성을 기반으로 값을 인식.
        즉, value 값을 제어하고 업데이트하는 방식 */}
        <select defaultValue={nationality} onChange={onChangeNationality}>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="eng">영국</option>
          <option value="ger">독일</option>
        </select>
        {nationality}
      </div>
      <div>
        <textarea value={bio} onChange={onChangeBio}></textarea>
      </div>
    </div>
  );
};

export default Register;
