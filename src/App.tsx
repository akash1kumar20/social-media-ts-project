import Login_SignIn from "./components/Authentication/Login_SignIn";
import Popup from "./Design/Popup";
import SideDesign from "./Design/SideDesign";
import { PopupAction } from "./store/popupSlice";
import { useAppDispatch, useAppSelector } from "./store";

const App = () => {
  const message = useAppSelector((state) => state.popup.message);
  const isStatus = useAppSelector((state) => state.popup.isStatus);
  const status = useAppSelector((state) => state.popup.status);
  const dispatch = useAppDispatch();

  if (isStatus) {
    setTimeout(() => {
      dispatch(PopupAction.clearMessage());
    }, 2000);
  }

  return (
    <>
      {isStatus && <Popup message={message} status={status} />}
      <div className="flex md:justify-between items-center px-6 md:flex-row flex-col gap-y-4 pt-2 bg-gradient-to-br from-orange-300 via-green-300 to-yellow-300 h-[100vh]">
        <SideDesign />
        <Login_SignIn />
      </div>
    </>
  );
};

export default App;
