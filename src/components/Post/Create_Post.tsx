import HomeComponents from "../../Design/HomeComponents";
import Heading from "../../Design/Heading";
import PostUploader from "./PostUploader";
import Button from "../../Design/Button";
import { useAppDispatch, useAppSelector } from "../../store";
import { useState } from "react";
import axios from "axios";
import { PopupAction } from "../../store/popupSlice";
import { useNavigate } from "react-router-dom";

type ObjToStore = {
  caption: string;
  image: any;
  date: string;
};

const Create_Post = () => {
  const [caption, setCaption] = useState<string>("");
  const imgToPost = useAppSelector((state) => state.photo.photo);
  const [warning, setWarning] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const convertedMail = useAppSelector(
    (state) => state.authentication.convertedEmaiL
  );
  if (warning) {
    setTimeout(() => {
      setWarning(false);
    }, 1500);
  }

  const createPostHandler = async (e: any) => {
    e.preventDefault();
    if (imgToPost === null) {
      setWarning(true);
    } else {
      const objToStore: ObjToStore = {
        caption: caption,
        image: imgToPost,
        date: new Date().toLocaleDateString(),
      };
      try {
        let res = await axios.post(
          `https://react-movie-project-c8d34-default-rtdb.firebaseio.com/${convertedMail}/socailMedia.json`,
          objToStore
        );
        if (res.status === 200) {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setTimeout(() => {
            dispatch(
              PopupAction.setMessage({
                status: "Success",
                message: "Post Uploaded Successfully!",
              })
            );
          }, 500);
          setTimeout(() => {
            navigate("/home/myPosts");
          }, 2000);
        }
      } catch (err) {
        dispatch(
          PopupAction.setMessage({
            status: "Error",
            message: "Please Try Again!",
          })
        );
      }
    }
  };

  return (
    <HomeComponents>
      <Heading>Create Post</Heading>
      <h2 className="text-xl font-semibold">Show the world your creativity</h2>

      <form
        className="mt-6 border-2 border-gray-500 rounded-lg py-2 ps-2 md:w-[80%] w-[94%]"
        onSubmit={(e) => createPostHandler(e)}
      >
        <div className="flex flex-col gap-2 items-start justify-start">
          <label htmlFor="caption" className="text-xl font-semibold ">
            Caption
          </label>
          <textarea
            id="caption"
            placeholder="What's in your mind?"
            className="w-[90%] text-lg placeholder:text-black px-2 rounded-lg focus:outline-none text-black border-2 border-black"
            required
            onChange={(e) => setCaption(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 items-start justify-start my-3">
          <label className="text-xl font-semibold " htmlFor="photo">
            Photo
          </label>
          <PostUploader />
          {warning && (
            <span className="text-sm font-semibold text-red-500 drop-shadow-md">
              Both Caption and Photo are mandatory!
            </span>
          )}
          <div className="flex items-center gap-x-3 justify-between">
            <Button
              className={{
                backgroundColor: "rgb(51, 45, 175 )",
                color: "white",
              }}
            >
              POST
            </Button>
            {imgToPost !== null && (
              <button
                onClick={() => location.reload()}
                className="px-6 py-2 rounded-lg shadow-lg drop-shadow-lg font-semibold border text-lg text-white bg-red-600"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </form>
    </HomeComponents>
  );
};

export default Create_Post;
