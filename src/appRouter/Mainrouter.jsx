import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@/Pages/Home";
import About from "@/Pages/About";
import Services from "@/Pages/Services";
import Blog from "@/Pages/Blog";
import Contact from "@/Pages/Contact";
import BlogDetail from "@/Pages/BlogDetail";
import ServiceEnquiry from "@/Pages/ServiceEnquiry";
import Game from "@/Pages/Game";

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/service_enquiry' element={<ServiceEnquiry />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </>
  );
};

export default MainRouter;