import { Button } from "@mui/material";
import React from "react";
import styles from "./SubNavbar.module.css";

const inlineStyles = {
  subHeaderNavLinkItems: {
    color: "white",
    letterSpacing: "1.2px",
  },
  comparePlanContainer: {
    // background: "rgb(255 255 255 / 10%)",
    background: "#f5634b",
    borderRadius: "5px",

    "&:hover": {
      background: "#f5634b",
      cursor: "pointer",
    },
  },
};

const SubNavbar = () => {
  const handleClick = () => {
    console.log("In handle on click");
  };
  return (
    <div className={styles["sub-header-container"]}>
      <Button sx={{ ...inlineStyles.subHeaderNavLinkItems }}>Home</Button>
      <Button sx={{ ...inlineStyles.subHeaderNavLinkItems }}>About</Button>
      <Button sx={{ ...inlineStyles.subHeaderNavLinkItems }}>Trainers</Button>
      <Button sx={{ ...inlineStyles.subHeaderNavLinkItems }}>Gallery</Button>
      <Button sx={{ ...inlineStyles.comparePlanContainer }}>
        <div className={styles["compare-plans"]}>Compare Plans</div>
      </Button>
    </div>
  );
};

export default SubNavbar;
