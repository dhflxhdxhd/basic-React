import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
const Home = () => {
  return (
    <div>
      <Header
        leftChild={<Button text={"Left"} />}
        title={"Header"}
        rightChild={<Button text={"Right"} />}
      />
    </div>
  );
};

export default Home;
