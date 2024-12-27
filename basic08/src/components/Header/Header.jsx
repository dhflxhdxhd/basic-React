import "./Header.css";
const Header = ({ title, leftChild, rightChild }) => {
  return (
    <header className="header">
      <div className="header_left">{leftChild}</div>
      <div className="header_title">{title}</div>
      <div className="header_right">{rightChild}</div>
    </header>
  );
};

export default Header;
