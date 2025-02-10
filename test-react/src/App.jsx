import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Banner from "./pages/Banner/Banner";
import Itest from "./pages/Itest";
import AutoTimeoutRedirect from "./pages/AutoTimeoutRedirect";
import NotFound from "./pages/Notfound/Notfound";
import IframePage from "./pages/IframePage";
import Loading from "./pages/Loading/Loading";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Itest />}></Route>
        <Route path="/banner" element={<Banner />} />
        <Route path="/auto" element={<AutoTimeoutRedirect />}></Route>
        <Route path="/iframe" element={<IframePage />}></Route>
        <Route path="/loading" element={<Loading />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
