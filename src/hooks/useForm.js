import { useState } from "react";
import useValidation from "@/hooks/useValidation";

const useForm = (initialValues, onSubmitCallback, validationSchema = {}) => {
  // Set form data state
  const [formData, setFormData] = useState(initialValues);

  // Calling another custom Hook - useValidation
  const { validateFieldOnChange, validateAllFields, validationProps } =
    useValidation(formData, validationSchema);

  const handleInputChange = (e) => {
    const { name, type, value, checked } = e.target;

    const parsedValue =
      type === "checkbox"
        ? checked
        : value === "true" // Convert string representation of boolean to boolean
        ? true
        : value === "false"
        ? false
        : type === "number"
        ? value === ""
          ? ""
          : parseFloat(value) // Parse as float if it's a number, allow empty string (for when user clears input)
        : value; // e.target.value

    setFormData({
      ...formData,
      [name]: parsedValue
    });

    validateFieldOnChange(name, value);
  };

  const resetForm = () => {
    const resetValues = Object.keys(formData).reduce((acc, key) => {
      acc[key] = "";
      return acc;
    }, {});

    setFormData(resetValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateAllFields()) {
      try {
        await onSubmitCallback(formData);
      } catch (error) {
        console.error("Error during form submission", error);
      }
    } else {
      console.warn("Validation Failed");
      alert("Invalid Form");
    }
  };

  return {
    formData,
    handleInputChange,
    resetForm,
    handleSubmit,
    validationProps
  };
};

export default useForm;
