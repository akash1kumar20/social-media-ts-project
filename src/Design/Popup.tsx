type PopupProps = {
  status: string;
  message: string;
};
const Popup = (props: PopupProps) => {
  if (props.status === "Success") {
    return (
      <div className=" bg-green-500 commonStyle ">
        <p className="font-semibold">Status:</p>
        <p>{props.message}</p>
      </div>
    );
  }
  if (props.status === "Error") {
    return (
      <div className=" bg-red-500 commonStyle ">
        <p className="font-semibold">Status:</p>
        <p>{props.message}</p>
      </div>
    );
  }
  if (props.status === "Info") {
    return (
      <div className=" bg-blue-500 commonStyle ">
        <p className="font-semibold">Status:</p>
        <p>{props.message}</p>
      </div>
    );
  }
  if (props.status === "Warning") {
    return (
      <div className=" bg-yellow-500 text-white w-full md:px-10 px-4 py-2 text-lg flex items-center justify-center gap-x-2">
        <p className="font-semibold">Status:</p>
        <p>{props.message}</p>
      </div>
    );
  }
};

export default Popup;
