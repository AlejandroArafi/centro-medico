import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/Service" element={<Service />} />
     
      </Routes>
      {/* <Header />
      <Hero />
      <Footer /> */}
    </div>
  );
}

export default App;
