import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import CustomLoadingBar from "./components/LoadingBar";
import NavLink from "./components/NavLink";

const App = () => {
  const [progress, setProgress] = useState(0);

  const simulateAPICall = async (navigate, path) => {
    setProgress(30);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    navigate(path);
    setProgress(100);
  };

  return (
    <Router>
      <CustomLoadingBar progress={progress} setProgress={setProgress} />
      <nav style={{ margin: "10px 0" }}>
        <NavLink label="Home" path="/" simulateAPICall={simulateAPICall} />
        <NavLink label="About" path="/about" simulateAPICall={simulateAPICall} />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
