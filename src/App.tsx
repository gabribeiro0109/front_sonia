import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sonia from "./pages/Sonia/Sonia";
import Home from "./pages/Home/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/sonia" element={<Sonia />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
