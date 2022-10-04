import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect } from "react";
import { Box } from "@mui/system";
import { Collapse, Divider } from "@mui/material";
import { useState } from "react";
import { useCallback } from "react";

import Login from "../../Authentication/Login/Login";
import ResetPassword from "../../Authentication/ResetPassword/ResetPassword";
import Register from "../../Authentication/Register/Register";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  // "& .MuiPaper-root-MuiDialog-paper": {
  //   maxHeight: "100%",
  // },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = useState(false);
  const [memberAuth, setMemberAuth] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  //   const handleClickOpen = () => {
  //     setOpen(!open);
  //   };
  const handleClose = () => {
    setOpen(!open);
  };

  const handleMemberRegistration = useCallback((event) => {
    event.preventDefault();
    setMemberAuth(true);
    setResetPassword(false);
  });

  const handleResetPassword = (event) => {
    event.preventDefault();
    setResetPassword(true);
  };

  // console.log("memberAuth:", memberAuth);
  // console.log("resetPassword:", resetPassword);

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        PaperProps={{
          sx: {
            width: { xs: "100%", sm: "50%", md: "45%", lg: "35%" },
            // backgroundColor: { xs: "red", md: "yellow" },
            maxHeight: "100%",
          },
        }}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {memberAuth
            ? "Register"
            : !memberAuth && !resetPassword
            ? "Login"
            : resetPassword
            ? "Reset Password"
            : undefined}
        </BootstrapDialogTitle>
        <Divider />

        <DialogContent sx={{ overflow: "hidden", marginBottom: "3%" }}>
          <Box>
            {!memberAuth && !resetPassword ? (
              <Login
                onhandleMemberRegistration={handleMemberRegistration}
                onhandleResetPassword={handleResetPassword}
              />
            ) : memberAuth ? (
              <Collapse in={memberAuth}>
                <Register
                  onToggleAnimation={memberAuth}
                  onSetMemberAuth={setMemberAuth}
                />
              </Collapse>
            ) : resetPassword ? (
              <Collapse in={resetPassword}>
                <ResetPassword
                  onMemberAuth={setMemberAuth}
                  onToggleAnimation={resetPassword}
                />
              </Collapse>
            ) : undefined}
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
