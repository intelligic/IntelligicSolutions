import PhoneInput from "react-phone-input-2";

const PhoneInputField = ({ value, onChange, error }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="label">
        Phone Number <sup className="text-red-600">*</sup>
      </label>

      <PhoneInput
        country={"in"}
        value={value}
        onChange={onChange}
        inputClass="!w-full !h-[40px] !text-black "
        containerClass="!w-full"
        buttonClass="!border"
        // className='input'
      />

      {error && (
        <span className="font-medium text-[12px] text-red-600">{error}</span>
      )}
    </div>
  );
};

export default PhoneInputField;
