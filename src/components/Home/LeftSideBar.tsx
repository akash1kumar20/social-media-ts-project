import { FaHome, FaRegBell, FaUserCircle } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import { IoMdPhotos } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { RiArrowRightCircleFill } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import "./ActiveLink.css";
import { AuthenticationSliceAction } from "../../store/authenticationSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import { PopupAction } from "../../store/popupSlice";

const LeftSideBar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const logOut = () => {
    dispatch(AuthenticationSliceAction.logOutHandler());
    dispatch(
      PopupAction.setMessage({
        status: "Info",
        message: "LogOut Successfully!",
      })
    );
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  const theme = useAppSelector((state) => state.theme.theme);
  let themeBoolean: boolean = false;

  if (theme === "light") {
    themeBoolean = true;
  }
  return (
    <div className="w-[20%] pt-4">
      <h3 className="text-xl font-semibold text-center mb-1">PhotoMania</h3>
      <div className="pt-1 ">
        <NavLink
          to="/home/posts"
          className={
            themeBoolean
              ? "activeClassDark leftSideBar"
              : "activeClass leftSideBar"
          }
        >
          <FaHome />
          Home
        </NavLink>
        <NavLink
          to="/home/createPost"
          className={
            themeBoolean
              ? "activeClassDark leftSideBar"
              : "activeClass leftSideBar"
          }
        >
          <FiPlusCircle />
          Add Photo
        </NavLink>
        <NavLink
          to="/home/myPosts"
          className={
            themeBoolean
              ? "activeClassDark leftSideBar"
              : "activeClass leftSideBar"
          }
        >
          <IoMdPhotos />
          My Photos
        </NavLink>
        <NavLink
          to="/home/profile"
          className={
            themeBoolean
              ? "activeClassDark leftSideBar"
              : "activeClass leftSideBar"
          }
        >
          <FaUserCircle />
          Profile
        </NavLink>
        <NavLink
          to="/"
          className={
            themeBoolean
              ? "activeClassDark leftSideBar"
              : "activeClass leftSideBar"
          }
        >
          <FaRegBell />
          Notification
        </NavLink>
        <NavLink
          to="/"
          className={
            themeBoolean
              ? "activeClassDark leftSideBar"
              : "activeClass leftSideBar"
          }
        >
          <RiArrowRightCircleFill />
          Direct
        </NavLink>
        <NavLink
          to="/home/setting"
          className={
            themeBoolean
              ? "activeClassDark leftSideBar"
              : "activeClass leftSideBar"
          }
        >
          <IoSettingsOutline />
          Settings
        </NavLink>
        <p className="cursor-pointer leftSideBar" onClick={() => logOut()}>
          <MdOutlinePowerSettingsNew />
          Logout
        </p>
      </div>
    </div>
  );
};

export default LeftSideBar;
