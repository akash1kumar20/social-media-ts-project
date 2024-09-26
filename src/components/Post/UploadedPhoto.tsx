import ReactDOM from "react-dom";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { photoUploadedActions } from "../../store/photoUploaded";
import { useAppDispatch } from "../../store";

type UploadedPhotoProps = {
  image: any;
  cancelUpload: () => void;
  uploadingDone: () => void;
};
const UploadedPhoto = ({
  image,
  cancelUpload,
  uploadingDone,
}: UploadedPhotoProps) => {
  const dispatch = useAppDispatch();
  const revertUpload = () => {
    cancelUpload();
  };
  const uploadPost = () => {
    dispatch(photoUploadedActions.setPhoto({ image: image }));
    uploadingDone();
  };
  return ReactDOM.createPortal(
    <div className="min-h-[100vh] w-[100vw]  flex justify-center fixed top-0 bg-black bg-opacity-70">
      <div className="flex items-center justify-center gap-x-3 fixed mt-6 text-white">
        <span
          className="bg-red-600 text-white px-6 py-2 rounded-lg shadow-lg drop-shadow-lg font-semibold border text-lg hover:cursor-pointer"
          onClick={revertUpload}
        >
          <ImCross />
        </span>
        <span className="text-white px-6 py-2 rounded-lg shadow-lg drop-shadow-lg font-semibold border text-lg bg-blue-600 hover:cursor-pointer">
          <FaCheck onClick={uploadPost} />
        </span>
      </div>
      <img
        src={URL.createObjectURL(image)}
        className="h-[80vh] w-[80vw] m-auto rounded-lg drop-shadow-xl shadow-xl border-2 border-white"
      />
    </div>,
    document.querySelector("#photo")!
  );
};

export default UploadedPhoto;
