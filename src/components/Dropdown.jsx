const Dropdown = ({
  label,
  name,
  onChange,
  value,
  items,
  isRequired,
  isValid
}) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={name} className="text-gray-800">
        {label} {isRequired && <span className="text-red-500">*</span>}
      </label>
      <select
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        className={`rounded-md bg-white border p-3 text-md font-normal text-gray-900 border-slate-600 ${
          isValid
            ? "text-gray-900 border-slate-600"
            : "text-red-500 border-red-500"
        }`}
        aria-required={isRequired}
        aria-invalid={!isValid}
      >
        {items.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {!isValid && (
        <p className="text-red-500 text-sm">Please choose an option</p>
      )}
    </div>
  );
};

export default Dropdown;
