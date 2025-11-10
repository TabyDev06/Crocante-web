import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";


import NavBar from "./components/Fixed_Items/NavBar";
import Home from "./components/pages/Home";
import Menu from "./components/pages/Menu";
import AboutUs from "./components/pages/AboutUs";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
