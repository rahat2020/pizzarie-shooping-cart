import React from "react";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
 
  return (
    <Router>
      <div className="app-container">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;