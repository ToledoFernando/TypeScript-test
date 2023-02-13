import { Routes, Route } from "react-router-dom";
import Detail from "./pages/About/Detail";
import Home from "./pages/Home/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
