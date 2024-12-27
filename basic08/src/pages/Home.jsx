import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import DiaryList from "../components/DiaryList/DiaryList";
const Home = () => {
  return (
    <div>
      <Header
        leftChild={<Button text={"<"} />}
        title={"2024년 12월"}
        rightChild={<Button text={">"} />}
      />
      <DiaryList />
    </div>
  );
};

export default Home;
