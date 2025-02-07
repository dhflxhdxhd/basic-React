import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Banner from "./pages/Banner";
import Itest from "./pages/Itest";
import AutoTimeoutRedirect from "./pages/AutoTimeoutRedirect";
import NotFound from "./pages/Notfound";
import IframePage from "./pages/IframePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Itest />}></Route>
        <Route path="/banner" element={<Banner />} />
        <Route path="/auto" element={<AutoTimeoutRedirect />}></Route>
        <Route path="/iframe" element={<IframePage />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
