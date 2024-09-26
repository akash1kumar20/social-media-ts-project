import { useEffect, useState } from "react";
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
  const [showTopBtn, setShowTopBtn] = useState<boolean>(false);
  const handleScroll = () => {
    const scrollHeight = window.scrollY;
    const targetHeight = 380;

    if (scrollHeight > targetHeight) {
      setShowTopBtn(true);
    } else {
      setShowTopBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={
        themeBoolean
          ? "md:w-[60%] min-h-[100vh] bg-slate-800 text-white  pt-4"
          : "md:w-[60%] min-h-[100vh] bg-white text-slate-800  pt-4"
      }
    >
      <center> {props.children}</center>

      {showTopBtn && (
        <a
          href="#top"
          className="fixed md:hidden bg-white text-black py-2 px-3 rounded-lg font-semibold flex justify-end items-center cursor-pointer border-2 border-black ms-2"
        >
          Top
        </a>
      )}
    </div>
  );
};

export default HomeComponents;
