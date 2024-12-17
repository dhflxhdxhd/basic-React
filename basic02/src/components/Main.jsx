import "./Main.css";
// JSX 주의
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있음
// 2. 숫자, 문자열, 배열 값만 렌더링
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야만 한다.

const Main = () => {
  const number = 10;
  const obj = { a: 1 };
  const user = {
    name: "user01",
    isLogin: true,
  };

  return (
    <main>
      <h1>Main</h1>
      {/* <h2>{number + 10}</h2>
      <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
      <p>{10}</p>
      <p>{[1, 2, 3]}</p>
      <p>{undefined}</p>
      <p>{null}</p>
      {obj.a}
      <div className="logout">
        {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>} */}
      {/* </div> */}
    </main>
  );
};

export default Main;
