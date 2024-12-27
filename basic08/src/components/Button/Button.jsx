import "./Button.css";
const Button = ({ text = "버튼", type = "default", onClickButton }) => {
  return (
    <>
      <button className={`button button_${type}`} onClick={onClickButton}>
        {text}
      </button>
    </>
  );
};

export default Button;
