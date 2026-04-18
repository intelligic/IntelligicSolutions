import React from "react";
import { useState } from "react";
import { validateForm } from "../../utils/formValidation";
import { submitWithToast } from "../../hooks/useFormSubmit";
import NameInputField from "../../components/Form/NameinputField";
import EmailInputField from "../../components/Form/EmailInputField";
import PhoneInputField from "../../components/Form/PhoneInputField";
import TextareaField from "../../components/Form/TextareaField";
import SelectInputField from "../../components/Form/SelectInputField";
import { budgetOptions } from "../../Data/FormData";
import { serviceOptions } from "../../Data/FormData";
import { HiSparkles } from "react-icons/hi2";

const Enquirysec = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    service: true,
    budget: true,
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const rules = {
    name: "name",
    email: "email",
    service: true,
    budget: true,
    message: true,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(data, rules);

    if (!data.phone || data.phone.length < 10) {
      validationErrors.phone = "Enter valid phone number";
    }

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    await submitWithToast({
      data,
      pageKey: "contact-info",
      successMsg: "Thanks! We will contact you soon.",
      failMsg: "Submission failed. Try again.",
      resetForm: () =>
        setData({
          name: "",
          email: "",
          phone: "",
          service: true,
          budget: true,
          message: "",
        }),
      setLoading,
    });
  };
  return (
    <section className="topmain">
      <div className="main w-full">
        <div className="w-full flex flex-col justify-center items-center gap-10">
          {/* for Heading */}
          <div className="subheadingbg w-fit flex justify-center items-center gap-3">
            <HiSparkles className="iconHeading" />
            <h1 className="subHeading">Get Quote</h1>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-3">
            <h2 className="mainHeading">We’re Here to Help You</h2>
            <p className="mainParagraph text-[18px]">
              Fill out this form to send your inquires to Intelligic Solutions.
            </p>
          </div>

          {/* for contact details */}
          <div className="flex cart-shadow justify-center py-[30px] px-[20px] w-150 items-center gap-14 bg-[#b9ecff4d] rounded-lg  ">
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

              <SelectInputField
                label="Service"
                name="service"
                required
                value={data.service}
                options={serviceOptions}
                onChange={(e) => setData({ ...data, service: e.target.value })}
                error={errors.service}
              />

              <SelectInputField
                label="Budget"
                name="budget"
                required
                value={data.budget}
                options={budgetOptions}
                onChange={(e) => setData({ ...data, budget: e.target.value })}
                error={errors.budget}
              />

              <TextareaField
                label="Your Message"
                value={data.message}
                onChange={(value) => setData({ ...data, message: value })}
                error={errors?.message}
              />

              <button
                disabled={loading}
                // className="w-full cart2 bg-[#F7F6F5] text-black font-bold px-6 py-2.5 tracking-widest whitespace-nowrap rounded-md"
                className="button w-full cart2"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enquirysec;
