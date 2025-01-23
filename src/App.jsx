import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Specialties from "./components/Specialties";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Doctors from "./pages/Doctors";
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/specialties" element={<Specialties />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctores" element={<Doctors />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
