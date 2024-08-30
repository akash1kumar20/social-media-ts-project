import { useAppSelector } from "../store";

type HomeComponentsProps = {
  children: React.ReactNode;
};
const HomeComponents = (props: HomeComponentsProps) => {
  const theme = useAppSelector((state) => state.theme.theme);
  let themeBoolean: boolean = false;
  if (theme === "light") {
    themeBoolean = true;
  }
  return (
    <div
      className={
        themeBoolean
          ? "w-[60%] bg-slate-800 text-white"
          : "w-[60%] bg-white text-slate-800"
      }
    >
      {props.children}
    </div>
  );
};

export default HomeComponents;
