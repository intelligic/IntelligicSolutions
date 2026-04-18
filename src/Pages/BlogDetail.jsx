import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleBlog } from "../Services/wordpress";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    getSingleBlog(slug).then(setBlog);
  }, [slug]);

  if (!blog) {
    return (
      <div className="text-center py-20 text-gray-500">Loading blog...</div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 pb-24 pt-14">
      {/* Featured Image */}
      {blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
        <img
          src={blog._embedded["wp:featuredmedia"][0].source_url}
          alt={blog.title.rendered}
          className="w-full rounded-2xl mb-8"
        />
      )}

      {/* Title */}
      <h1
        className="text-3xl md:text-4xl font-bold mb-8"
        dangerouslySetInnerHTML={{ __html: blog.title.rendered }}
      />

      {/* Content */}
      <div
        className="prose prose-lg max-w-none
                   prose-img:rounded-xl
                   prose-img:mx-auto
                   prose-a:text-blue-600
                   prose-strong:text-gray-900"
        dangerouslySetInnerHTML={{ __html: blog.content.rendered }}
      />
    </article>
  );
};

export default BlogDetail;
