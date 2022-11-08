import { toast, Slide } from "react-toastify";

export const useToast = () => {
  const toastResponse = (type, message) => {
    console.log("Type:", type);
    console.log("Type:", typeof type);
    switch (true) {
      case type == "success":
        toast.success(message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Slide,
        });
        break;

      case type == "error":
        toast.error(message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Slide,
        });
        break;

      case type == "info":
        toast.info(message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Slide,
        });
        break;

      default:
        break;
    }
  };
  return toastResponse;
};
