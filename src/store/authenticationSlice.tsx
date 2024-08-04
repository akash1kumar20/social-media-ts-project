import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthenticationState = {
  token: string;
  isUserLoggedIn: boolean;
  userEmaiL: string;
  convertedEmaiL: string;
  validPassword: boolean;
};

const initialState: AuthenticationState = {
  token: localStorage.getItem("socialMediaTSToken") || " ",
  isUserLoggedIn: false,
  userEmaiL: localStorage.getItem("userMail") || " ",
  convertedEmaiL: localStorage.getItem("convertedMail") || " ",
  validPassword: false,
};

const AuthenticationSlice = createSlice({
  name: "Authentication",
  initialState: initialState,
  reducers: {
    logInHandler(
      state,
      action: PayloadAction<{ token: string; email: string }>
    ) {
      state.isUserLoggedIn = true;
      state.token = action.payload.token;
      state.userEmaiL = action.payload.email;
      localStorage.setItem("socialMediaTSToken", state.token);
      localStorage.setItem("userMail", state.userEmaiL);
    },
    logOutHandler(state) {
      state.isUserLoggedIn = false;
      localStorage.clear();
    },
    converEmailHandler(state, action: PayloadAction<{ mail: string }>) {
      state.convertedEmaiL = action.payload.mail
        .replace("@", "")
        .replace(".", "");
      localStorage.setItem("convertedMail", state.convertedEmaiL);
    },
    passwordValidationHandler(state) {
      state.validPassword = true;
    },
  },
});

export const AuthenticationSliceAction = AuthenticationSlice.actions;
export default AuthenticationSlice;
