import "./Button.css";

const Button = ({ text = "버튼", onClickButton }) => {
  return (
    <>
      <button onClick={onClickButton}>{text}</button>
    </>
  );
};

export default Button;
