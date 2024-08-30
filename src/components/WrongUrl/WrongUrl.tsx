import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const WrongUrl = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState<number>(10);
  setInterval(() => {
    setTimeLeft(timeLeft - 1);
  }, 1000);
  useEffect(() => {
    setTimeout(() => {
      navigate("/home/posts");
    }, 9500);
  }, []);

  return (
    <div className="text-center pt-10 bg-red-500 text-white text-xl min-h-[100vh]">
      <p>Oops! This Page Doesn't Exists.</p>
      <p>
        Please go back to the{" "}
        <span
          className="text-blue-700 cursor-pointer"
          onClick={() => navigate("/home/posts")}
        >
          home
        </span>
      </p>
      <p>Or Redirecting you in {timeLeft}</p>
    </div>
  );
};

export default WrongUrl;
