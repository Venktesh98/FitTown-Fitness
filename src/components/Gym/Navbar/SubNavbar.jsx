import { Button } from "@mui/material";
import React from "react";
import Scroll from "react-scroll";
import styles from "./SubNavbar.module.css";

const inlineStyles = {
  subHeaderNavScrollLinkItems: {
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
  let ScrollLink = Scroll.Link;

  const handleClick = () => {
    console.log("In handle on click");
  };

  return (
    <div className={styles["sub-header-container"]}>
      <div className={styles["sub-header-modules"]}>
        <ScrollLink
          // activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={1500}
        >
          <Button sx={{ ...inlineStyles.subHeaderNavScrollLinkItems }}>
            Home
          </Button>
        </ScrollLink>

        <ScrollLink
          activeClass="active"
          to="gallery"
          spy={true}
          smooth={true}
          duration={1500}
        >
          <Button sx={{ ...inlineStyles.subHeaderNavScrollLinkItems }}>
            Gallery
          </Button>
        </ScrollLink>

        <ScrollLink
          activeClass="active"
          to="services"
          spy={true}
          smooth={true}
          duration={1500}
        >
          <Button sx={{ ...inlineStyles.subHeaderNavScrollLinkItems }}>
            Services
          </Button>
        </ScrollLink>

        <ScrollLink
          activeClass="active"
          to="trainers"
          spy={true}
          smooth={true}
          duration={1500}
        >
          <Button sx={{ ...inlineStyles.subHeaderNavScrollLinkItems }}>
            Trainers
          </Button>
        </ScrollLink>

        <Button sx={{ ...inlineStyles.comparePlanContainer }}>
          <div className={styles["compare-plans"]}>
            <ScrollLink
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              duration={1500}
            >
              Compare Plans
            </ScrollLink>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default SubNavbar;
