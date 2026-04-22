import React from "react";
import Blogsec from "../components/Blog/Blogsec.jsx";
import SEO from "../common/SEO";

const Blog = () => {
  return (
    <div>
      <SEO 
        title="Our Blog" 
        description="Stay updated with the latest ideas, innovations, and tech trends in web and mobile development." 
        url="/blog"
      />
      <section id="hero" className="bg-gradient-brand-50-100-200  py-10 md:py-14 2xl:py-18">
        <Blogsec />
      </section>
    </div>
  );
};

export default Blog;
