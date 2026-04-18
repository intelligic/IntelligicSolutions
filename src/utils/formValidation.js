export const validators = {
  name: (v) => /^[A-Za-z ]+$/.test(v),
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
  subject: (v) => /^[A-Za-z ]+$/.test(v),
};

export const validateForm = (data, rules) => {
  const errors = {};

  Object.keys(rules).forEach((field) => {
    const rule = rules[field];

    // Required check (sab ke liye)
    if (!data[field]) {
      errors[field] = "This field is required";
      return;
    }

    // Regex validation (sirf jahan rule diya ho)
    if (
      rule &&
      validators[rule] &&
      !validators[rule](data[field])
    ) {
      errors[field] = "Invalid value";
    }
  });

  return errors;
};
