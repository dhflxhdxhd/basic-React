import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";
/*
1. "/" : 모든 일기를 조회하는 Home 페이지
2. "/write" : 새로운 일기를 작성하는 Write 페이지
3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
*/
function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/write");
  };
  return (
    <>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/write"}>Write</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      <button onClick={onClickButton}>글 작성으로 이동</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Write />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
