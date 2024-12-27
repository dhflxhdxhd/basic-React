import "./Header.css";
const Header = ({ title, leftChild, rightChild }) => {
  return (
    <header className="header">
      <div className="header-left">{leftChild}</div>
      <div className="header-title">{title}</div>
      <div className="header-right">{rightChild}</div>
    </header>
  );
};

export default Header;
