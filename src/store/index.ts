import { configureStore } from "@reduxjs/toolkit";
import PopupSlice from "./popupSlice";
import AuthenticationSlice from "./authenticationSlice";
import ThemeSlice from "./themeSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import PhotoUploaded from "./photoUploaded";

const store = configureStore({
  reducer: {
    popup: PopupSlice.reducer,
    authentication: AuthenticationSlice.reducer,
    theme: ThemeSlice.reducer,
    photo: PhotoUploaded.reducer,
  },
});
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
export default store;
