import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Company from "./components/Company";
import Navbarpage from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbarpage />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:companyName" element={<Company />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
