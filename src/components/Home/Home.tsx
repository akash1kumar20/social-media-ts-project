import { Outlet, useNavigate } from "react-router-dom";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import { useAppDispatch, useAppSelector } from "../../store";
import { useEffect } from "react";
import { PopupAction } from "../../store/popupSlice";
import Popup from "../../Design/Popup";

const Home = () => {
  const isUserLoggedIn = useAppSelector((state) => state.authentication.token);
  const message = useAppSelector((state) => state.popup.message);
  const isStatus = useAppSelector((state) => state.popup.isStatus);
  const status = useAppSelector((state) => state.popup.status);
  const dispatch = useAppDispatch();

  if (isStatus) {
    setTimeout(() => {
      dispatch(PopupAction.clearMessage());
    }, 2000);
  }

  const navigate = useNavigate();
  useEffect(() => {
    if (isUserLoggedIn.length === 1) {
      navigate("/");
      dispatch(
        PopupAction.setMessage({
          status: "Error",
          message: "Please Login First!",
        })
      );
    }
  }, []);

  const theme = useAppSelector((state) => state.theme.theme);
  let themeBoolean: boolean = false;
  if (theme === "light") {
    themeBoolean = true;
  }
  return (
    <>
      {isStatus && <Popup message={message} status={status} />}
      <div
        className={
          themeBoolean
            ? "bg-white text-slate-800 min-h-[100vh] flex flex-col md:flex-row"
            : "bg-slate-800 text-white min-h-[100vh] flex flex-col md:flex-row"
        }
      >
        <LeftSideBar />
        <Outlet />
        <RightSideBar />
      </div>
    </>
  );
};

export default Home;
