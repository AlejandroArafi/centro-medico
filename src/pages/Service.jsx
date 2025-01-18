// src/pages/Service.jsx
import React from "react";
import Services from "../components/Services";
import Header from "../components/Header";
import Footer from "../components/Footer";
import servicesData  from "../data/servicesData";

function Service() {
  return (
    <div className="min-h-screen bg-gray-50">
        <Header />
      <Services services={servicesData}/>
      <Footer />
    </div>
  );
}

export default Service;
