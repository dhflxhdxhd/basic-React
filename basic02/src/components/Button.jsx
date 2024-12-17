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

  return (
    <button style={buttonStyle}>
      {text} - {backgroundColor.toUpperCase()}
      {children}
    </button>
  );
};

// Button.defaultProps = {
//   backgroundColor: "#222",
//   text: "click",
// };

export default Button;
