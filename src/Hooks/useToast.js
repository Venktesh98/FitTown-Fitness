import { toast, Slide } from "react-toastify";

const toastProperties = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Slide,
};

export const useToast = () => {
  const toastResponse = (type, message) => {
    switch (true) {
      case type == "success":
        toast.success(message, {
          ...toastProperties,
        });
        break;

      case type == "error":
        toast.error(message, {
          ...toastProperties,
        });
        break;

      case type == "info":
        toast.info(message, {
          ...toastProperties,
        });
        break;

      default:
        break;
    }
  };
  return toastResponse;
};
