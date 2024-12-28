import { useParams } from "react-router-dom";
import Viewer from "../components/DiaryViewer/Viewer";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
const Diary = () => {
  const params = useParams();
  console.log(params);
  console.log(`번호 ${params.id}`);

  return (
    <div>
      <Header
        leftChild={<Button text={"뒤로 가기"} />}
        title={"9999-99-99의 기록"}
        rightChild={<Button text={"수정하기"} />}
      />
      <Viewer />
    </div>
  );
};

export default Diary;
