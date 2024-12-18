const Button = ({ text = "+100", onClickButton }) => {
  return (
    <>
      <button
        onClick={() => {
          onClickButton();
        }}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
