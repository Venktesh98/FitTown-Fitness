import { useCallback } from "react";
import { useState } from "react";
import { createContext } from "react";

const DialogContext = createContext();

export default DialogContext;

export const DialogContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [memberAuth, setMemberAuth] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(!open);
  };

  const handleMemberRegistration = useCallback((event) => {
    event.preventDefault();
    setMemberAuth(true);
    // handleClickOpen();
    setResetPassword(false);
  });

  const handleResetPassword = (event) => {
    event.preventDefault();
    setResetPassword(true);
  };

  return (
    <DialogContext.Provider
      value={{
        handleClickOpen,
        handleClose,
        handleMemberRegistration,
        handleResetPassword,
        open,
        setOpen,
        memberAuth,
        setMemberAuth,
        resetPassword,
        setResetPassword,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};
