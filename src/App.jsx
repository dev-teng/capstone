import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About"
import Menu from "./Menu";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="menu" element={<Menu />}/>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
