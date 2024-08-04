import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PopupState = {
  isStatus: boolean;
  status: string;
  message: string;
};

const initialState: PopupState = {
  isStatus: false,
  status: " ",
  message: " ",
};

const PopupSlice = createSlice({
  name: "popup",
  initialState: initialState,
  reducers: {
    setMessage(
      state,
      action: PayloadAction<{ status: string; message: string }>
    ) {
      state.status = action.payload.status;
      state.isStatus = true;
      state.message = action.payload.message;
    },
    clearMessage(state) {
      state.status = " ";
      state.isStatus = false;
      state.message = " ";
    },
  },
});

export const PopupAction = PopupSlice.actions;
export default PopupSlice;
