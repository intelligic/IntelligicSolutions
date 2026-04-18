import React, { useState } from "react";
import { validateForm } from "../../utils/formValidation";
import NameInputField from "../Form/NameinputField";
import EmailInputField from "../Form/EmailInputField";
import PhoneInputField from "../Form/PhoneInputField";
import TextInputField from "../Form/TextInputField";
import TextareaField from "../Form/TextareaField";

const FORM_ENDPOINT = "https://formspree.io/f/mgolekzj";

const Contactform = () => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const [data, setData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); 
  // idle | submitting | success | error

  const rules = {
    name: "name",
    email: "email",
    subject: "subject",
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
          _subject: `Contact Enquiry: ${data.subject}`,
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      // ✅ SUCCESS
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
        <div className="w-full flex flex-col justify-center items-center gap-5 xl:gap-10 pb-10">

          {/* Heading */}
          <div className="w-full flex flex-col justify-center items-center gap-3">
            <h1 className="subHeading text-[20px] xl:text-[25px] text-center font-extrabold tracking-widest">
              Just Fill out the form and hit submit
            </h1>
            <h2 className="text text-[16px] text-center">
              We're here to assist
            </h2>
          </div>

          <div className="flex justify-center flex-col lg:flex-row gap-15 items-center w-full">

            {/* FORM */}
            <div className="flex cart-shadow justify-center w-full xl:w-150 items-center rounded-lg p-5">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-center items-center gap-4 w-full"
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

                <TextInputField
                  label="Subject"
                  value={data.subject}
                  onChange={(value) => setData({ ...data, subject: value })}
                  error={errors?.subject}
                />

                <TextareaField
                  label="Your Message"
                  value={data.message}
                  onChange={(value) => setData({ ...data, message: value })}
                  error={errors?.message}
                />

                {/* BUTTON UX */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className={`
                    button w-full cart2
                    ${status === "success" ? "bg-green-600 text-white" : ""}
                    ${status === "error" ? "bg-red-600 text-white" : ""}
                  `}
                >
                  {status === "idle" && "Submit"}
                  {status === "submitting" && "Submitting..."}
                  {status === "success" && "Submitted ✓"}
                  {status === "error" && "Try Again"}
                </button>
              </form>
            </div>

            {/* MAP */}
            <div className="flex cart-shadow justify-center w-full xl:w-150 items-center rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.430112824212!2d72.8582846!3d19.1764074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7a9de6ef235%3A0x93d78ac4732e58c1!2sIntelligic%20Solutions!5e0!3m2!1sen!2sin!4v1770448527059"
                className="w-full h-[350px] sm:h-[400px] lg:h-[580px] border-0"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactform;
