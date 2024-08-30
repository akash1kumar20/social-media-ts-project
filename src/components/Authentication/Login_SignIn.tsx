import { useState } from "react";
import Button from "../../Design/Button";
import { PopupAction } from "../../store/popupSlice";
import { LuEye, LuEyeOff } from "react-icons/lu";
import PasswordValidation from "./PasswordValidation";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthenticationSliceAction } from "../../store/authenticationSlice";
import { useAppDispatch, useAppSelector } from "../../store";

const Login_SignIn = () => {
  const [isLogIn, setIsLogIn] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [confirmShowPassowrd, setConfirmShowPassword] =
    useState<boolean>(false);
  const [passwordValidation, setPasswordValidation] = useState<boolean>(false);
  const [email, setEmail] = useState<string>(" ");
  const [password, setPassword] = useState<string>(" ");
  const [confirmPassword, setConfirmPassword] = useState<string>(" ");
  const dispatch = useAppDispatch();
  const isPasswordValid = useAppSelector(
    (state) => state.authentication.validPassword
  );
  const navigate = useNavigate();

  const accountSubmitHandler = async (event: any) => {
    event.preventDefault();
    let userEmaiL: string;
    let userPassword: string;
    let userConfirmPassword: string;
    let url: string;
    let message: string;

    if (isLogIn) {
      userEmaiL = email;
      userPassword = password;
      message = "Welcome Back!";
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA4JWtkc3CSNkjvEIIgE1eIAwlnd9ReEyE";
    } else {
      userEmaiL = email;
      userPassword = password;
      if (!isPasswordValid) {
        return dispatch(
          PopupAction.setMessage({
            status: "Error",
            message: "Password is invalid!",
          })
        );
      } else {
        userConfirmPassword = confirmPassword;
        if (userPassword !== userConfirmPassword) {
          return dispatch(
            PopupAction.setMessage({
              status: "Error",
              message: "Both password must be same",
            })
          );
        }
        message = "Account Created!";
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA4JWtkc3CSNkjvEIIgE1eIAwlnd9ReEyE";
      }
    }
    try {
      let res = await axios.post(url, {
        email: userEmaiL,
        password: userPassword,
        returnSecureToken: true,
      });
      dispatch(
        AuthenticationSliceAction.logInHandler({
          token: res.data.idToken,
          email: res.data.email,
        })
      );
      dispatch(
        AuthenticationSliceAction.converEmailHandler({ mail: res.data.email })
      );
      if (res.status === 200) {
        dispatch(
          PopupAction.setMessage({
            status: "Success",
            message: message,
          })
        );
        setTimeout(() => {
          navigate("/home/posts");
        }, 1500);
      }
    } catch (err) {
      dispatch(
        PopupAction.setMessage({
          status: "Error",
          message: "Authentication Failed!",
        })
      );
    }
  };

  return (
    <div className="bg-green-600 rounded-2xl shadow-2xl drop-shadow-2xl w-full md:w-[40%] border-2 border-black">
      <div className=" text-center bg-orange-600 text-white  m-2  py-2 rounded-xl border-2 ">
        <h1 className="text-3xl font-semibold mb-3">
          {isLogIn ? "Please login to continue" : "Create a new account"}
        </h1>
        <form onSubmit={(event) => accountSubmitHandler(event)}>
          <div className="flex static flex-col md:w-[80%] w-[94%] mx-auto mb-2">
            <label
              htmlFor="mail"
              className=" bg-white text-orange-500 relative top-2 w-fit px-1 text-lg rounded-xl underline "
            >
              Email
            </label>
            <input
              type="mail"
              name="mail"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Type Here..."
              className="mt-1 text-green-600 focus:outline-none ps-2 py-2  rounded-xl placeholder:text-green-600 "
            />
          </div>
          <div className="flex static flex-col md:w-[80%] w-[94%] mx-auto mb-2">
            <label
              htmlFor="password"
              className=" bg-white text-orange-500 relative top-2 w-fit px-1 text-lg rounded-xl underline "
            >
              Password
            </label>
            <div className="flex justify-between pe-1 items-center gap-x-1 bg-white rounded-xl ">
              <input
                onFocus={() => setPasswordValidation(true)}
                type={!showPassword ? "password" : "text"}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Type Here..."
                className="mt-1 text-green-600 focus:outline-none ps-2 py-2  placeholder:text-green-600 w-full rounded-xl "
              />
              {showPassword && (
                <LuEyeOff
                  className="text-black font-semibold text-2xl"
                  onClick={() => setShowPassword(false)}
                />
              )}
              {!showPassword && (
                <LuEye
                  className="text-black font-semibold text-2xl"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
          </div>
          {!isLogIn && passwordValidation && (
            <PasswordValidation password={password} />
          )}
          {!isLogIn && (
            <div className="flex static flex-col md:w-[80%] w-[94%] mx-auto mb-2">
              <label
                htmlFor="confirm"
                className=" bg-white text-orange-500 relative top-2 w-fit px-1 text-lg rounded-xl underline "
              >
                Confirm Password
              </label>
              <div className="flex justify-between pe-1 items-center gap-x-1 bg-white rounded-xl ">
                <input
                  type={confirmShowPassowrd ? "text" : "password"}
                  name="confirm"
                  placeholder="Type Here..."
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-1 text-green-600 focus:outline-none ps-2 py-2  placeholder:text-green-600 w-full rounded-xl "
                />
                {confirmShowPassowrd && (
                  <LuEyeOff
                    className="text-black font-semibold text-2xl"
                    onClick={() => setConfirmShowPassword(false)}
                  />
                )}
                {!confirmShowPassowrd && (
                  <LuEye
                    className="text-black font-semibold text-2xl"
                    onClick={() => setConfirmShowPassword(true)}
                  />
                )}
              </div>
            </div>
          )}
          <Button
            className={{
              backgroundColor: "rgb(51, 165, 255 )",
              color: "white",
            }}
          >
            {isLogIn ? "Log-in" : "Sign-up"}
          </Button>
          <p
            className="mt-2 font-bold cursor-pointer"
            onClick={() => setIsLogIn((isLogIn) => !isLogIn)}
          >
            {isLogIn ? "New User?" : "Already Have A Account?"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login_SignIn;
