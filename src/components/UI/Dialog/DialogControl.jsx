import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import Register from "../../Authentication/Register";
import { Box } from "@mui/system";
import { Divider } from "@mui/material";
import Login from "../../Authentication/Login";
import { useState } from "react";
import { useCallback } from "react";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
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
    console.log("In member");
    setMemberAuth(true);
  });

  console.log("memberAuth:", memberAuth);

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {memberAuth ? "Register" : "Login"}
        </BootstrapDialogTitle>
        <Divider />
        <DialogContent sx={{ overflow: "hidden", marginBottom: "5%" }}>
          <Box>
            {memberAuth ? (
              <Register onToggleAnimation={memberAuth} />
            ) : (
              <Login onhandleMemberRegistration={handleMemberRegistration} />
            )}

            <Register />
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
