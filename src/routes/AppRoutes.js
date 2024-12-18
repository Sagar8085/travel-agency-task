import React from "react";
import {  Routes, Route } from "react-router-dom";
import Aboutus from "../Pages/About-us/AboutUs";
import ContactUs from "../Pages/Contact-us/ContactUs";
import Home from "../Pages/Home/Home";
import CuratedTours from "../Pages/Curated-Tours/CuratedTours";

function AppRoutes() {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/curated-tours" element={<CuratedTours />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
   
  );
}

export default AppRoutes;
