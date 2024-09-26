import HomeComponents from "../../Design/HomeComponents";
import Heading from "../../Design/Heading";
import PostUploader from "./PostUploader";
import Button from "../../Design/Button";
import { useAppSelector } from "../../store";
import { useState } from "react";

type ObjToStore = {
  caption: string;
  image: any;
  date: string;
};

const Create_Post = () => {
  const [caption, setCaption] = useState<string>("");
  const imgToPost = useAppSelector((state) => state.photo.photo);
  const [warning, setWarning] = useState<boolean>(false);
  if (warning) {
    setTimeout(() => {
      setWarning(false);
    }, 1500);
  }

  const createPostHandler = (e: any) => {
    e.preventDefault();
    if (imgToPost === null) {
      setWarning(true);
    } else {
      const objToStore: ObjToStore = {
        caption: caption,
        image: imgToPost,
        date: new Date().toLocaleDateString(),
      };
      console.log(objToStore);
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
