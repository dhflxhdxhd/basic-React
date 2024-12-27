import { useParams } from "react-router-dom";

const Edit = () => {
  const params = useParams();
  const id = params.id;
  return <div>Edit {id}</div>;
};

export default Edit;
