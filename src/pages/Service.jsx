// src/pages/Service.jsx
import React from "react";
import Services from "../components/Services";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Service() {
  return (
    <div className="min-h-screen bg-gray-50">
        <Header />
      <Services />
      <Footer />
    </div>
  );
}

export default Service;
