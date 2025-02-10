import Button from "../Button/Button";

const Modal = ({ children, onProceed, onStop }) => (
  <div style={modalStyles.overlay}>
    <div style={modalStyles.modal}>
      {children}
      <Button text="계속하기" onClickButton={onProceed} />
      <Button text="그만하기" onClickButton={onStop} />
    </div>
  </div>
);

const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(87, 87, 87, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
};

export default Modal;
