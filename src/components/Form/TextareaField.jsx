const TextareaField = ({ value, onChange, error }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="label">
        Your Message <sup className="text-red-600">*</sup>
      </label>

      <textarea
        rows={4}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Write your message..."
        className="input"
      />

      {error && <span className="font-medium text-[12px] text-red-600">{error}</span>}
    </div>
  );
};

export default TextareaField;
