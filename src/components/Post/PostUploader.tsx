import { useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import UploadedPhoto from "./UploadedPhoto";
import { useAppSelector } from "../../store";

const PostUploader = () => {
  const openFileUploader = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<any>();
  const imgToPost = useAppSelector((state) => state.photo.photo);

  const openUploader = () => {
    if (openFileUploader.current) {
      openFileUploader.current.click();
    }
  };

  const imageChangeHandler = (event: any) => {
    const file = event.target.files[0];
    setImage(file);
  };
  const revertImageChangeHandler = () => {
    setImage(null);
    if (openFileUploader.current) {
      openFileUploader.current = null;
      location.reload();
    }
  };
  const imageSettled = () => {
    setImage(null);
    if (openFileUploader.current) {
      openFileUploader.current = null;
    }
  };

  return (
    <>
      {imgToPost === null && (
        <div
          className="  flex justify-start items-center "
          onClick={openUploader}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3K0wYjv3jpP-eIaJEgwaNMSCKuAXGRorHiQ&s"
            className="w-[60%]  shadow-black hover:cursor-pointer"
          />
          <input
            type="file"
            ref={openFileUploader}
            className="hidden"
            onChange={imageChangeHandler}
          />
          <span className="font-semibold">
            Click Here <FaArrowLeft />
          </span>
          {image && (
            <UploadedPhoto
              image={image}
              cancelUpload={revertImageChangeHandler}
              uploadingDone={imageSettled}
            />
          )}
        </div>
      )}
      {imgToPost !== null && <img src={URL.createObjectURL(imgToPost)} />}
    </>
  );
};

export default PostUploader;
