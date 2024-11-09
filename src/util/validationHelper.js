const validations = {
  required: (value) => value && value.toString().trim() !== "",
  email: (value) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value),
  number: (value) => !isNaN(value),
  minLength: (value, minLength) => value.length >= minLength,
  maxLength: (value, maxLength) => value.length <= maxLength,
  between: (value, min, max) => value >= min && value <= max,
  minValue: (value, min) => value >= min,
  maxValue: (value, max) => value <= max,
  numberExact: (value, exact) => value?.toString()?.length === exact
};

export { validations };
