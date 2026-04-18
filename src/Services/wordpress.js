const BASE_URL = import.meta.env.VITE_WP_API;

export const getBlogs = async () => {
  const res = await fetch(`${BASE_URL}/posts?_embed`);
  return res.json();
};

export const getSingleBlog = async (slug) => {
  const res = await fetch(`${BASE_URL}/posts?slug=${slug}&_embed`);
  const data = await res.json();
  return data.length ? data[0] : null;
};
