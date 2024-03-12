import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
// import Footer from './components/Footer'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error from "./pages/Error";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/error" element={<Error/>}/>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
};

export default App;
