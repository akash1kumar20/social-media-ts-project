import { useEffect, useState } from "react";
import { GrCheckboxSelected } from "react-icons/gr";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { useDispatch } from "react-redux";
import { AuthenticationSliceAction } from "../../store/authenticationSlice";

type PasswordValidationProps = {
  password: string | " ";
};
const PasswordValidation = ({ password }: PasswordValidationProps) => {
  let [validNumber, setValidNumber] = useState<boolean>(false);
  let [validUpperCase, setValidUpperCase] = useState<boolean>(false);
  let [validLowerCase, setValidLowerCase] = useState<boolean>(false);
  let [validSpecialChar, setValidSpecialChar] = useState<boolean>(false);
  let [validLength, setValidLength] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const verifyPasswordHandler = (password: string) => {
      let lower = new RegExp("(?=.*[a-z])");
      let upper = new RegExp("(?=.*[A-Z])");
      let number = new RegExp("(?=.*[0-9])");
      let special = new RegExp("(?=.*[!@#$%^&*])");
      let length = new RegExp("(?=.{8,})");

      if (lower.test(password)) {
        setValidLowerCase(true);
      } else {
        setValidLowerCase(false);
      }

      if (upper.test(password)) {
        setValidUpperCase(true);
      } else {
        setValidUpperCase(false);
      }

      if (number.test(password)) {
        setValidNumber(true);
      } else {
        setValidNumber(false);
      }

      if (special.test(password)) {
        setValidSpecialChar(true);
      } else {
        setValidSpecialChar(false);
      }

      if (length.test(password)) {
        setValidLength(true);
      } else {
        setValidLength(false);
      }
    };
    if (password.length > 0) {
      verifyPasswordHandler(password);
    }
  }, [password]);

  if (
    validLength &&
    validLowerCase &&
    validNumber &&
    validSpecialChar &&
    validUpperCase
  ) {
    dispatch(AuthenticationSliceAction.passwordValidationHandler());
  }
  return (
    <div className="rounded-lg text-xs font-semibold bg-white w-fit mx-auto px-4 py-2">
      <p className="text-black">Password Must Have Atleast</p>
      <p
        className={
          validLength
            ? "text-green-600 flex justify-center items-center"
            : "text-red-600 flex justify-center items-center"
        }
      >
        Atleast 8 Characters
        <span className="ms-2">
          {validLength ? <GrCheckboxSelected /> : <MdCheckBoxOutlineBlank />}
        </span>
      </p>
      <p
        className={
          validNumber
            ? "text-green-600 flex justify-center items-center"
            : "text-red-600 flex justify-center items-center"
        }
      >
        One Number (0-9)
        <span className="ms-2">
          {validNumber ? <GrCheckboxSelected /> : <MdCheckBoxOutlineBlank />}
        </span>
      </p>
      <p
        className={
          validUpperCase
            ? "text-green-600 flex justify-center items-center"
            : "text-red-600 flex justify-center items-center"
        }
      >
        One Capital Letter (A-Z)
        <span className="ms-2">
          {validUpperCase ? <GrCheckboxSelected /> : <MdCheckBoxOutlineBlank />}
        </span>
      </p>
      <p
        className={
          validLowerCase
            ? "text-green-600 flex justify-center items-center"
            : "text-red-600 flex justify-center items-center"
        }
      >
        One Lower Letter (a-z)
        <span className="ms-2">
          {validLowerCase ? <GrCheckboxSelected /> : <MdCheckBoxOutlineBlank />}
        </span>
      </p>
      <p
        className={
          validSpecialChar
            ? "text-green-600 flex justify-center items-center"
            : "text-red-600 flex justify-center items-center"
        }
      >
        One Special Character (@,#,%,etc.)
        <span className="ms-2">
          {validSpecialChar ? (
            <GrCheckboxSelected />
          ) : (
            <MdCheckBoxOutlineBlank />
          )}
        </span>
      </p>
    </div>
  );
};

export default PasswordValidation;
