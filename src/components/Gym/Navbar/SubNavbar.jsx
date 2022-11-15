import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-scroll";
import styles from "./SubNavbar.module.css";

const inlineStyles = {
  subHeaderNavLinkItems: {
    color: "white",
    letterSpacing: "1.2px",
    display: "inline-block",
    ml: "9%",
    textAlign: "center",
  },
  comparePlanContainer: {
    // background: "rgb(255 255 255 / 10%)",
    background: "#f5634b",
    borderRadius: "5px",
    display: "inline-block",
    ml: "9%",
    textAlign: "center",

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
      <div className={styles["sub-header-modules"]}>
        <Button sx={{ ...inlineStyles.subHeaderNavLinkItems }}>Home</Button>
        <Button sx={{ ...inlineStyles.subHeaderNavLinkItems }}>About</Button>
        <Button sx={{ ...inlineStyles.subHeaderNavLinkItems }}>Trainers</Button>
        <Button sx={{ ...inlineStyles.subHeaderNavLinkItems }}>Gallery</Button>
        <Button sx={{ ...inlineStyles.comparePlanContainer }}>
          <div className={styles["compare-plans"]}>
            <Link
              // activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              duration={1500}
            >
              Compare Plans
            </Link>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default SubNavbar;
