import React, { useState } from "react";
import { motion } from "framer-motion";
import { validateForm } from "../utils/formValidation";
import NameInputField from "../components/Form/NameinputField";
import EmailInputField from "../components/Form/EmailInputField";
import PhoneInputField from "../components/Form/PhoneInputField";
import TextareaField from "../components/Form/TextareaField";
import SelectInputField from "../components/Form/SelectInputField";
import { budgetOptions, serviceOptions } from "../Data/FormData";
import { HiSparkles } from "react-icons/hi2";
import { PiArrowLeftBold } from "react-icons/pi";

const FORM_ENDPOINT = "https://formspree.io/f/mpqjzdlv";

const EnquiryFormContent = ({ initialService, onBack }) => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    service: initialService || "",
    budget: "",
    message: "",
  };

  const [data, setData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const rules = {
    name: "name",
    email: "email",
    service: true,
    budget: true,
    message: true,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const validationErrors = validateForm(data, rules);
    if (!data.phone || data.phone.length < 10) {
      validationErrors.phone = "Enter valid phone number";
    }

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      setStatus("idle");
      return;
    }

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          _subject: `Service Enquiry: ${data.service}`,
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      setStatus("success");
      setData(initialState);
      setErrors({});
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col h-full max-h-[90vh] overflow-y-auto custom-scrollbar">
      {/* Back Button and Header */}
      <div className="p-6 sm:p-8 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-20 border-b border-gray-50">
        <button 
          onClick={onBack}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors group"
        >
          <PiArrowLeftBold className="text-xl text-gray-600 group-hover:-translate-x-1 transition-transform" />
        </button>
        <div className="flex items-center gap-2 px-4 py-1.5 bg-blue-50 rounded-full">
           <HiSparkles className="text-[#00AEEF] text-sm" />
           <span className="text-[#00AEEF] font-bold text-xs uppercase tracking-widest">Get Quote</span>
        </div>
        <div className="w-10" /> {/* Spacer */}
      </div>

      <div className="px-6 pb-8 sm:px-12 sm:pb-12 pt-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">We’re Here to Help You</h2>
          <p className="text-gray-500 text-sm sm:text-base mt-2">
            Fill out this form to send your inquiries to Intelligic Solutions.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <NameInputField
              label="Name"
              value={data.name}
              onChange={(value) => setData({ ...data, name: value })}
              error={errors?.name}
            />
            <EmailInputField
              label="Email"
              value={data.email}
              onChange={(value) => setData({ ...data, email: value })}
              error={errors?.email}
            />
          </div>

          <PhoneInputField
            value={data.phone}
            onChange={(phone) => setData({ ...data, phone })}
            error={errors?.phone}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <SelectInputField
              label="Service"
              name="service"
              required
              value={data.service}
              options={serviceOptions}
              onChange={(e) => setData({ ...data, service: e.target.value })}
              error={errors?.service}
            />
            <SelectInputField
              label="Budget"
              name="budget"
              required
              value={data.budget}
              options={budgetOptions}
              onChange={(e) => setData({ ...data, budget: e.target.value })}
              error={errors?.budget}
            />
          </div>

          <TextareaField
            label="Your Message"
            value={data.message}
            onChange={(value) => setData({ ...data, message: value })}
            error={errors?.message}
          />

          <button
            type="submit"
            disabled={status === "submitting"}
            className={`w-full py-4 rounded-xl font-bold transition-all duration-300 transform active:scale-[0.98] ${
              status === "success" 
                ? "bg-green-500 text-white" 
                : "bg-[#00AEEF] text-white hover:bg-[#0096ce] hover:shadow-lg hover:shadow-blue-100"
            }`}
          >
            {status === "idle" && "Submit Enquiry"}
            {status === "submitting" && "Processing..."}
            {status === "success" && "Submitted Successfully ✓"}
            {status === "error" && "Something went wrong, try again"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryFormContent;
