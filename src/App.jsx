import "./App.css";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OffMe from "./pages/OffMe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/receipt" element={<OffMe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
