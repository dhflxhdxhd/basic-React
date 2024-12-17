import { useState, useEffect } from "react";
/*
간단한 회원가입 폼
1. 이름
2. 생년월일
3. 국적
4. 자기소개
*/

const Register = () => {
  //   const [name, setName] = useState("김콜라");
  //   const [birth, setBirth] = useState("2024-12-03");
  //   const [nationality, setNationality] = useState("kr");
  //   const [bio, setBio] = useState("");

  const [userInfo, setUserInfo] = useState({
    name: "",
    birth: "",
    nationality: "",
    bio: "",
  });

  console.log(userInfo);

  // 비슷한 이벤트핸들러를 하나의 통합된 핸들러로 사용
  const onChange = (event) => {
    console.log(event);
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  //   const onChangeName = (event) => {
  //     setUserInfo({ ...userInfo, name: event.target.value });
  //   };

  //   const onChangeBirth = (event) => {
  //     setUserInfo({ ...userInfo, birth: event.target.value });
  //   };

  //   const onChangeNationality = (event) => {
  //     setUserInfo({ ...userInfo, nationality: event.target.value });
  //   };

  //   const onChangeBio = (event) => {
  //     setUserInfo({ ...userInfo, bio: event.target.value });
  //   };

  //   useEffect(() => {
  //     console.log(birth);
  //   }, [birth]);

  return (
    <div>
      <div>
        <input
          type="text"
          name="name"
          value={userInfo.name}
          placeholder={"이름"}
          onChange={onChange}
        />
      </div>
      <div>
        <input
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
          value={userInfo.bio}
          name="bio"
          onChange={onChange}
        ></textarea>
      </div>
    </div>
  );
};

export default Register;
