const Input = ({
  label,
  placeholder,
  name,
  onChange,
  value,
  isRequired,
  isValid,
  errorMessage,
  type = "text"
}) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={name} className="text-gray-800">
        {label} {isRequired && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={`text-gray-900 rounded-md bg-white border p-3 text-md ${
          isValid ? "border-slate-600" : "border-red-500"
        }`}
        aria-required={isRequired}
        aria-invalid={!isValid}
      />
      {!isValid && <p className="text-red-500 text-sm">{errorMessage}</p>}
    </div>
  );
};

export default Input;
