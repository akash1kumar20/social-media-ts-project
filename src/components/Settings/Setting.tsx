import HomeComponents from "../../Design/HomeComponents";
import { useAppDispatch, useAppSelector } from "../../store";
import { themeSliceAction } from "../../store/themeSlice";

const Setting = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);
  const lightTheme = () => {
    dispatch(themeSliceAction.setLightTheme());
  };
  const darkTheme = () => {
    dispatch(themeSliceAction.setDarkTheme());
  };
  return (
    <HomeComponents>
      <div className="pt-10 text-center">
        <h2 className="text-3xl mb-4 mt-3">
          Current Theme - {theme.toUpperCase()}
        </h2>
        <h4 className="text-2xl font-semibold">Change Theme:</h4>
        <div className="text-lg mt-4 flex gap-4 items-center justify-center">
          <p
            className="bg-black text-white p-3 rounded-lg border-2 border-black cursor-pointer hover:text-white hover:bg-red-700"
            onClick={() => darkTheme()}
          >
            Dark
          </p>
          <p
            className="text-black bg-white border-2 border-black p-3 rounded-lg cursor-pointer hover:text-white hover:bg-red-700"
            onClick={() => lightTheme()}
          >
            Light
          </p>
        </div>
      </div>
    </HomeComponents>
  );
};

export default Setting;
