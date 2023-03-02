import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Orphanages from "./pages/Orphanages";
import Home from "./pages/Home";
import Actu from "./pages/Actu";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer"
// import Carousel from './components/Carousel'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path="/" element={<Banner/>}>
            <Route exact  path="/" element={<Home/>} />
            <Route path="/Actu" element={<Actu />} />
            <Route path="/Orphanages" element={<Orphanages />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<AboutUs />} />
          </Route>
          
        </Routes>
        <Footer />
      </Router>
      {/* <Carousel images={images} /> */}
    </div>
  );
}

export default App;
