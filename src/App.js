import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Orphanages from "./pages/Orphanages";
import Home from "./pages/Home";
import Actu from "./pages/Actu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Banner/>}>
            <Route index path="/home" element={<Home/>} />
            <Route path="/Actu" element={<Actu />} />
            <Route path="/Orphanages" element={<Orphanages />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
