import { useParams } from "react-router-dom";

const Diary = () => {
  const params = useParams();
  console.log(params);
  console.log(`번호 ${params.id}`);

  return <div>Diary</div>;
};

export default Diary;
