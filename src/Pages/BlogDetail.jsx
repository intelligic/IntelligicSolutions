import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getSingleBlog } from "../Services/wordpress";
import SEO from "../common/SEO";
import { HiArrowLeft, HiCalendar, HiUser, HiRefresh } from "react-icons/hi";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(false);
    
    getSingleBlog(slug)
      .then((data) => {
        if (isMounted) {
          if (data) {
            setBlog(data);
          } else {
            setError(true);
          }
          setLoading(false);
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }
      })
      .catch((err) => {
        console.error("Error fetching blog post:", err);
        if (isMounted) {
          setError(true);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00AEEF]"></div>
        <p className="text-gray-500 font-medium animate-pulse">Fetching Article...</p>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Post Not Available</h2>
        <p className="text-gray-600 mb-8 max-w-md">The requested post could not be loaded at this time. Please check your connection or try again later.</p>
        <div className="flex gap-4">
          <button 
            onClick={() => window.location.reload()} 
            className="bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-gray-200 transition"
          >
            <HiRefresh /> Retry
          </button>
          <Link to="/blog" className="bg-[#00AEEF] text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
            Go to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Safe checks for metadata
  const title = blog.title?.rendered || "Untitled Post";
  const content = blog.content?.rendered || "";
  const excerpt = blog.excerpt?.rendered?.replace(/<[^>]+>/g, '').substring(0, 160) || "Read the latest update from Intelligic Solutions.";
  const featuredImage = blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const authorName = blog._embedded?.author?.[0]?.name || "Admin";
  const categoryName = blog._embedded?.["wp:term"]?.[0]?.[0]?.name || "General";
  const postDate = blog.date ? new Date(blog.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : "";

  return (
    <div className="w-full bg-white selection:bg-[#00afff3b]">
      <SEO 
        title={title} 
        description={excerpt} 
        image={featuredImage}
        url={`/blog/${slug}`}
      />

      {/* Hero Section */}
      <section className="bg-gradient-brand-50-100-200 pt-16 pb-20 md:pt-24 md:pb-32 px-4 shadow-sm">
         <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-[#00AEEF] font-bold mb-10 group">
              <span className="bg-[#00AEEF] text-white p-2 rounded-full group-hover:px-4 transition-all duration-300">
                <HiArrowLeft />
              </span>
              Back to News
            </Link>
            
            <div className="flex flex-wrap items-center gap-6 mb-8">
               <span className="bg-white/80 backdrop-blur shadow-sm text-[#00AEEF] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
                 {categoryName}
               </span>
               <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                 <HiCalendar className="text-[#00AEEF]" /> {postDate}
               </div>
               <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                 <HiUser className="text-[#00AEEF]" /> By {authorName}
               </div>
            </div>

            <h1
              className="mainHeading text-4xl md:text-6xl font-extrabold text-[#111111] leading-tight mb-4 drop-shadow-sm"
              dangerouslySetInnerHTML={{ __html: title }}
            />
         </div>
      </section>

      {/* Main Content Area */}
      <section className="relative -mt-12 md:-mt-20 px-4 pb-20 z-10">
         <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            {featuredImage && (
              <div className="rounded-[40px] overflow-hidden shadow-2xl shadow-blue-500/10 mb-16 ring-8 ring-white/50">
                <img
                  src={featuredImage}
                  alt={title}
                  className="w-full h-auto object-cover max-h-[600px]"
                  loading="eager"
                />
              </div>
            )}

            {/* Post Content */}
            <div
              className="prose prose-lg md:prose-xl max-w-none 
                         prose-headings:text-gray-900 prose-headings:font-black prose-headings:tracking-tight
                         prose-p:text-gray-700 prose-p:leading-[1.8] prose-p:mb-10 prose-p:text-lg md:prose-p:text-xl
                         prose-strong:text-black prose-strong:font-bold
                         prose-img:rounded-[32px] prose-img:shadow-2xl prose-img:my-16
                         prose-a:text-[#00AEEF] prose-a:font-bold prose-a:underline-offset-4 hover:prose-a:underline
                         prose-blockquote:border-l-8 prose-blockquote:border-[#00AEEF]
                         prose-blockquote:bg-blue-50/50 prose-blockquote:p-8 prose-blockquote:rounded-r-3xl prose-blockquote:font-medium prose-blockquote:text-gray-800"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            {/* Tags Section */}
            {blog._embedded?.["wp:term"]?.[1]?.length > 0 && (
              <div className="mt-20 pt-12 border-t border-gray-100 flex flex-wrap gap-4">
                <span className="w-full text-xs font-black uppercase tracking-widest text-[#00AEEF] mb-2 opacity-60">Article Keywords</span>
                {blog._embedded?.["wp:term"]?.[1].map((tag) => (
                   <span key={tag.id} className="text-sm font-bold bg-gray-50 text-gray-600 px-6 py-2.5 rounded-2xl hover:bg-[#00AEEF] hover:text-white transition-all cursor-default shadow-sm active:scale-95">
                     #{tag.name}
                   </span>
                ))}
              </div>
            )}

            {/* Comments Form */}
            <div className="mt-20 pt-20 border-t border-gray-100">
               <div className="bg-[#111111] text-white rounded-[50px] p-8 md:p-20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-[#00AEEF]/20 rounded-full -mr-40 -mt-40 blur-[100px] pointer-events-none group-hover:bg-[#00AEEF]/30 transition-colors duration-700"></div>
                  
                  <div className="relative z-10 max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-black mb-4">Leave a Reply</h2>
                    <p className="text-gray-400 mb-12 text-lg md:text-xl">Have questions about this article? Drop a comment below and our team will get back to you.</p>
                    
                    <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                          <label className="text-xs font-black uppercase tracking-[0.2em] text-[#00AEEF]">Full Identity *</label>
                          <input 
                            type="text" 
                            className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-800 focus:border-[#00AEEF] outline-none transition-all placeholder:text-gray-700 text-lg"
                            placeholder="Full Name"
                          />
                        </div>
                        <div className="space-y-4">
                          <label className="text-xs font-black uppercase tracking-[0.2em] text-[#00AEEF]">Email Address *</label>
                          <input 
                            type="email" 
                            className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-800 focus:border-[#00AEEF] outline-none transition-all placeholder:text-gray-700 text-lg"
                            placeholder="Email"
                          />
                        </div>
                      </div>

                      <div className="space-y-4 pt-4">
                        <label className="text-xs font-black uppercase tracking-[0.2em] text-[#00AEEF]">Your Message *</label>
                        <textarea 
                          rows="4" 
                          className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-800 focus:border-[#00AEEF] outline-none transition-all placeholder:text-gray-700 text-lg md:text-xl resize-none"
                          placeholder="What are your thoughts?"
                        ></textarea>
                      </div>

                      <button 
                        type="button"
                        className="bg-white text-black font-extrabold px-14 py-5 rounded-2xl transition-all active:scale-95 flex items-center gap-3 hover:bg-[#00AEEF] hover:text-white"
                      >
                        Publish Message
                      </button>
                    </form>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default BlogDetail;
