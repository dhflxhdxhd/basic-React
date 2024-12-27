import "./App.css";
import { useEffect, useReducer, useRef, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";
import Edit from "./pages/Edit";
import { formatDate } from "./utils/dateFormatter";
import DiaryStateContext from "./contexts/DiaryStateContext";
import DiaryDispatchContext from "./contexts/DiaryDispatchContext";
import { mockData } from "./utils/mockData";

/*
1. "/" : 모든 일기를 조회하는 Home 페이지
2. "/write" : 새로운 일기를 작성하는 Write 페이지
3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
4. "/eidt" : 일기를 수정하는 페이지
*/
// 임시 일기 배열 데이터

function reducer(state, action) {
  switch (action.type) {
    case "WRITE":
      return [action.payload, ...state];
    case "UPDATE":
      return state.map((diary) =>
        String(diary.id) === String(action.payload.id) ? action.payload : diary
      );
    case "DELETE":
      return state.filter((diary) => diary.id != action.payload);
    default:
      throw new Error("[ERROR] unknown action type");
  }
}

function App() {
  const [diaries, dispatch] = useReducer(reducer, mockData);
  let idRef = useRef(3);

  useEffect(() => {
    console.log(diaries);
  }, [diaries]);

  // 새로운 일기 작성
  const onWrite = (diary) => {
    const newDiary = {
      id: idRef.current++,
      createDate: formatDate(new Date()),
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
