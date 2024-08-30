type HomeComponentsProps = {
  children: React.ReactNode;
};
const HomeComponents = (props: HomeComponentsProps) => {
  return (
    <div className="w-[60%] bg-white text-slate-800">{props.children}</div>
  );
};

export default HomeComponents;
