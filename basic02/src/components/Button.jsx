const Button = ({ backgroundColor = "#222", text = "click", children }) => {
  const ButtonStyle = {
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  };

  const buttonStyle = {
    backgroundColor: backgroundColor,
    ...ButtonStyle,
  };

  // 이벤트 객체
  const onClickButton = (event) => {
    console.log(event);
    console.log(text);
  };
  return (
    <button
      style={buttonStyle}
      // onClick={() => {
      //   // 이벤트 핸들러 (익명 함수 or 선언식 함수)
      //   console.log(text);
      // }}

      // [주의] 함수의 호출결과 전달 X (ex. onClickButton())
      onClick={onClickButton}
    >
      {text} - {backgroundColor.toUpperCase()}
      {children}
    </button>
  );
};

// [업데이트 사항] defaultProps 함수형 지원 안함
// Button.defaultProps = {
//   backgroundColor: "#222",
//   text: "click",
// };

export default Button;
