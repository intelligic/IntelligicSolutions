import React from "react";
import Enquirysec from "../components/ServiceEnquiry/Enquirysec";
import SEO from "../common/SEO";

const ServiceEnquiry = () => {
  return (
    <div className="w-full">
      <SEO 
        title="Service Enquiry" 
        description="Ready to start your project with Intelligic? Fill out this inquiry form and our experts will get back to you with a tailored plan." 
        url="/service_enquiry"
      />
      <Enquirysec />
    </div>
  );
};

export default ServiceEnquiry;
