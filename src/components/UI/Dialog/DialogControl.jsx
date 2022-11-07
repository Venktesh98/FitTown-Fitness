import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/system";
import { Collapse, Divider } from "@mui/material";
import Login from "../../Authentication/Login/Login";
import ResetPassword from "../../Authentication/ResetPassword/ResetPassword";
import Register from "../../Authentication/Register/Register";
import DialogContext from "../../../contexts/DialogContext";
import { useContext } from "react";

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
  const dialogContext = useContext(DialogContext);

  const {
    handleClose,
    handleMemberRegistration,
    handleResetPassword,
    open,
    memberAuth,
    setMemberAuth,
    resetPassword,
  } = dialogContext;

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        disableScrollLock={true} // prevents from locking of vertical scroll bar
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
