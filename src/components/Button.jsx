const Button = ({ text }) => {
  return (
    <div className="py-2">
      <button className="text-white font-semibold transition ease-in-out duration-600 rounded px-6 py-2 text-md bg-orange-400 hover:bg-orange-500">
        {text}
      </button>
    </div>
  );
};

export default Button;
