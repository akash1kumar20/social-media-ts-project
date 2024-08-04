type ButtonProps = {
  children: string;
  className: React.CSSProperties;
};
const Button = (props: ButtonProps) => {
  return (
    <button
      type="submit"
      style={props.className}
      className="px-6 py-2 rounded-lg shadow-lg drop-shadow-lg font-semibold border text-lg"
    >
      {props.children}
    </button>
  );
};

export default Button;
