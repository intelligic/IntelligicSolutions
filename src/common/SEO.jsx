import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
  const siteTitle = "Intelligic Solutions";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = "Intelligic Solutions – Premium Technology & Digital Solutions. We build scalable web and mobile applications.";
  const defaultKeywords = "Intelligic, Web Development, Mobile Apps, SEO, Technology Solutions";
  const defaultImage = "https://raw.githubusercontent.com/intelligic/Project-Assets/main/Intelligic/Images/intelligic.png";
  const siteUrl = "https://intelligic.org";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteTitle,
    "url": siteUrl,
    "description": description || defaultDescription,
    "publisher": {
      "@type": "Organization",
      "name": "Intelligic Solutions",
      "logo": defaultImage
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url ? `${siteUrl}${url}` : siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url ? `${siteUrl}${url}` : siteUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description || defaultDescription} />
      <meta property="twitter:image" content={image || defaultImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={url ? `${siteUrl}${url}` : siteUrl} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

export default SEO;
