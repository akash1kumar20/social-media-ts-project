type HeadingProps = {
  children: string;
};
const Heading = (props: HeadingProps) => {
  return (
    <h1 className="text-3xl font-bold  bg-red-900 mx-4 w-[80%] text-white rounded-md border-2 border-white">
      {props.children}
    </h1>
  );
};

export default Heading;
