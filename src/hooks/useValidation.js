import { useState, useMemo } from "react";

const useValidation = (formData, validationSchema) => {
  const [errors, setErrors] = useState({});

  const memoValidationSchema = useMemo(
    () => validationSchema,
    [validationSchema]
  );

  // Validate field on change
  const validateFieldOnChange = (name, value) => {
    if (memoValidationSchema[name]) {
      const fieldErrors = validateField(value, memoValidationSchema[name]);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: fieldErrors
      }));
    }
  };

  // Validate field against validation schema
  const validateField = (value, rules) => {
    let errors = [];

    for (const rule of rules) {
      if (
        typeof rule === "object" &&
        rule.validator &&
        !rule.validator(value)
      ) {
        errors.push(rule.message); // Add error message if validation fails
      }
    }

    return errors;
  };

  // Validate all fields against their validation schema
  const validateAllFields = () => {
    const newErrors = [];
    for (const field in memoValidationSchema) {
      let fieldErrors = validateField(
        formData[field],
        memoValidationSchema[field]
      );
      if (fieldErrors.length > 0) {
        newErrors[field] = fieldErrors;
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validation props to use in form field component for error handling
  const validationProps = useMemo(
    () => (name) => ({
      isValid: !errors?.[name] || errors?.[name].length === 0,
      errorMessage: errors?.[name]?.[0]
    }),
    [errors]
  );

  return {
    validateFieldOnChange,
    validateAllFields,
    validationProps
  };
};

export default useValidation;
