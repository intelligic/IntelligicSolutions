const SelectInputField = ({
  label,
  name,
  value,
  onChange,
  options = [],
  required = false,
  error,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="label">
        {label}
        {required && <sup className="text-red-600"> *</sup>}
      </label>

      <div className="relative w-full">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={`input appearance-none pr-10 bg-white  font-normal ${
            error ? "border-red-500!" : ""
          }`}
        >
          <option className="placeholder:text-[12px] placeholder:text-[#7F7F7F]" value="">Select {label}</option>
          {options.map((opt, index) => (
            <option  key={index} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
          ▼
        </span>
      </div>

      {error && (
        <span className="font-medium text-[12px]  text-red-600">{error}</span>
      )}
    </div>
  );
};

export default SelectInputField;
