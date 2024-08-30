import { Outlet, useNavigate } from "react-router-dom";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import { useAppDispatch, useAppSelector } from "../../store";
import { useEffect } from "react";
import { PopupAction } from "../../store/popupSlice";

const Home = () => {
  const isUserLoggedIn = useAppSelector((state) => state.authentication.token);
  const dispatch = useAppDispatch();
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
  return (
    <div className="bg-slate-800 text-white min-h-[100vh] flex">
      <LeftSideBar />
      <Outlet />
      <RightSideBar />
    </div>
  );
};

export default Home;
