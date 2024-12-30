import "./App.css";
import { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";
import Edit from "./pages/Edit";
import DiaryStateContext from "./contexts/DiaryStateContext";
import DiaryDispatchContext from "./contexts/DiaryDispatchContext";
import useCookieReducer from "./hooks/useCookieReducer";

function App() {
  const [diaries, dispatch] = useCookieReducer("diaries", []);
  let lastIdx = useRef();

  useEffect(() => {
    lastIdx.current = diaries.length > 0 ? diaries[0].id + 1 : 0; // idx 값 초기화
  }, []);

  // 새로운 일기 작성
  const onWrite = (diary) => {
    const newDiary = {
      id: lastIdx.current++,
      createDate: diary.createDate,
      emotionId: diary.emotionId,
      content: diary.content,
    };

    dispatch({
      type: "WRITE",
      payload: newDiary,
    });
  };

  const onUpdate = (diary) => {
    dispatch({
      type: "UPDATE",
      payload: diary,
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  return (
    <>
      <DiaryStateContext.Provider value={diaries}>
        <DiaryDispatchContext.Provider value={{ onWrite, onDelete, onUpdate }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/write" element={<Write />} />
            <Route path="/edit/:id" element={<Edit />}></Route>
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
