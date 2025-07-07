import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import MyResume from "./pages/MyResume"
import "./App.css";

function App() {
  return (
 <Router>
 <div className="App">
  <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<MyResume />} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
   </Routes>
  </div>
 </Router>

   
  );
}

export default App;
