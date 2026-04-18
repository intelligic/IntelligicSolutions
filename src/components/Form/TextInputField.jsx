const TextInputField = ({
  value,
  onChange,
  error,
  label = "Text", // 👈 default label
}) => {
  const handleChange = (e) => {
    const onlyText = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    onChange(onlyText);
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="label">
        {label} <sup className="text-red-600">*</sup>
      </label>

      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={`Enter ${label.toLowerCase()}`}
        className="input"
      />

      {error && <span className="font-medium text-[12px] text-red-600">{error}</span>}
    </div>
  );
};

export default TextInputField;
