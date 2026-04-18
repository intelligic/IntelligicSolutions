import React, { useState } from "react";
import { validateForm } from "../../utils/formValidation";
import NameInputField from "../../components/Form/NameinputField";
import EmailInputField from "../../components/Form/EmailInputField";
import PhoneInputField from "../../components/Form/PhoneInputField";
import TextareaField from "../../components/Form/TextareaField";
import SelectInputField from "../../components/Form/SelectInputField";
import { budgetOptions, serviceOptions } from "../../Data/FormData";
import { HiSparkles } from "react-icons/hi2";

const FORM_ENDPOINT = "https://formspree.io/f/mpqjzdlv";

const Enquirysec = () => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  };

  const [data, setData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  // idle | submitting | success | error

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
    <section className="topmain">
      <div className="main w-full">
        <div className="w-full flex flex-col justify-center items-center gap-7">
          <div className="flex flex-col justify-center items-center gap-2">
            {/* Heading */}
            <div className="subheadingbg w-fit flex justify-center items-center gap-3">
              <HiSparkles className="iconHeading" />
              <h1 className="subHeading">Get Quote</h1>
            </div>

            <div className="w-full flex flex-col justify-center items-center">
              <h2 className="mainHeading">We’re Here to Help You</h2>
              <p className="mainParagraph text-[18px]">
                Fill out this form to send your inquiries to Intelligic
                Solutions.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="flex cart-shadow justify-center py-[30px] px-[30px] w-150 items-center bg-[#b9ecff4d] rounded-lg">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center gap-2 w-full"
            >
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

              <PhoneInputField
                value={data.phone}
                onChange={(phone) => setData({ ...data, phone })}
                error={errors?.phone}
              />

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

              <TextareaField
                label="Your Message"
                value={data.message}
                onChange={(value) => setData({ ...data, message: value })}
                error={errors?.message}
              />

              {/* Button */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className={`button w-full cart2 ${
                  status === "success" ? "bg-green-600 text-white" : ""
                }`}
              >
                {status === "idle" && "Submit"}
                {status === "submitting" && "Submitting..."}
                {status === "success" && "Submitted ✓"}
                {status === "error" && "Try Again"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enquirysec;
