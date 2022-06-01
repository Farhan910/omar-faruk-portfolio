import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import Projects from "./Pages/Projects";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
