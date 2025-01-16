import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>  
        <Route path="/Home" element={<Home />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
     
      </Routes>
    
    </div>
  );
}

export default App;
