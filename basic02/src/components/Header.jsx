import Button from "./Button";
const Header = () => {
  const buttonProps = {
    text: "카페",
    backgroundColor: "#85A98F",
  };
  return (
    <header>
      <Button text={"메일"} backgroundColor={"#75A47F"}></Button>
      <Button text={"블로그"}>
        <div>블로그 글 01</div>
      </Button>
      <Button {...buttonProps}></Button>
      {/* <h1>Header</h1> */}
    </header>
  );
};

export default Header;
