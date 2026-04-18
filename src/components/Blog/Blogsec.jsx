import React, { useEffect, useState } from "react";
import HomeHeading from "../../common/HomeHeading";
import { getBlogs } from "../../Services/wordpress";
import { Link } from "react-router-dom";

const Blogsec = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs().then(setBlogs);
  }, []);

  return (
    <section className="topmain">
      <div className="main w-full">
        <div className="w-full flex flex-col justify-center items-center gap-14">
          {/* Heading Section */}
          <HomeHeading
            mainHeading="Behind the Code: Ideas, Innovation & Tech"
            subHeading="Discover key trends and expert advice on building scalable web and mobile applications."
          />

          <div className="w-full px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {blogs.map((blog) => (
              <Link
                key={blog.id}
                // to={`/blog/${blog.slug}`}
                className="border border-slate-800 rounded-sm bg-[#e0f6ff] overflow-hidden hover:shadow-lg transition"
              >
                {/* Featured Image */}
                <div className="relative group overflow-hidden  ">
                  <img
                    src={blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
                    alt={blog.title.rendered}
                    className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Hover square */}
                  {/* <div className="absolute inset-0 border-4 inset-ring-amber-500 border-white  opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div> */}
                </div>

                <div className="p-3 m-1 flex flex-col justify-center items-start gap-2.5">
                  <h2
                    className="subHeading lg:text-[16px] leading-7 tracking-wide"
                    dangerouslySetInnerHTML={{ __html: blog.title.rendered }}
                  />
                  <div className="flex items-center gap-2 text-md font-semibold tracking-wide text-gray-500">
                    <span>
                      <i className="fa-solid fa-user"></i>{" "}
                      {blog._embedded?.author?.[0]?.name || "Admin"}
                    </span>
                    <span>
                      <i className="fa-solid fa-calendar"></i>{" "}
                      {new Date(blog.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  {/* Category */}
                  <div className="text lg:text-[14px]">
                    {blog._embedded?.["wp:term"]?.[0]
                      ?.map((cat) => cat.name)
                      .join(", ") || "Uncategorized"}
                  </div>

                  {/* Read More Button */}
                  <Link
                    to={`/blog/${blog.slug}`}
                    className="text-sm text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded inline-block"
                  >
                    Read More
                  </Link>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogsec;
