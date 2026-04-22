import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy loading pages for performance optimization
const Home = lazy(() => import("@/Pages/Home"));
const About = lazy(() => import("@/Pages/About"));
const Services = lazy(() => import("@/Pages/Services"));
const Blog = lazy(() => import("@/Pages/Blog"));
const Contact = lazy(() => import("@/Pages/Contact"));
const ServiceEnquiry = lazy(() => import("@/Pages/ServiceEnquiry"));
const Game = lazy(() => import("@/Pages/Game"));

const BlogDetail = lazy(() => import("@/Pages/BlogDetail"));

const MainRouter = () => {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    }>
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
    </Suspense>
  );
};

export default MainRouter;