import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import styles from "./Home.module.css";
import CustomizedDialogs from "../../UI/Dialog/DialogControl";
import Pricing from "../PriceList/Pricing";
import Services from "../Services/Services";
import Gallery from "../Gallery/Gallery";
import Trainers from "../Trainers/Trainers";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Contact from "../ContactDetails/Contact/Contact";
import CelebrityQuotes from "../CelebrityQuotes/CelebrityQuotes";
import { DialogContextProvider } from "../../../contexts/DialogContext";
import Navbar from "../Navbar/Navbar";

// const VideoComponent = styled("video")({
//   width: "100%",
//   height: "100vh",
//   objectFit: "cover",
//   position: "absolute",
// });

// const HeadingDivComponenet = styled("div")({
//   display: "flex",
//   flexDirection: "column",
//   width: "70%",
//   bottom: 0,
//   //   left: "8%",
//   position: "absolute",
//   padding: "0 6%",
//   //   border: "2px solid white",
// });

// const HeadingComponent = styled("h1")({
//   zIndex: "1",
//   //   position: "absolute",
//   fontWeight: 700,
//   fontSize: "95px",
//   bottom: 0,
//   color: "white",
//   textTransform: "uppercase",
//   //   fontFamily: "Barlow Condensed, sans-serif",
//   // fontFamily: "Merriweather Sans, sans-serif",
//   //   fontFamily: "Kalam, cursive",
//   fontFamily: "Oswald, sans-serif",
//   letterSpacing: "0.2px",
//   lineHeight: 1,

//   "& span": {
//     color: "#F5634B",
//   },
// });

const Home = () => {
  const [textStatus, setTextStatus] = useState(false);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(!animation);
  }, []);

  const handleVideoControl = () => {
    setTextStatus(true);
  };

  return (
    <section id="home">
      <div>
        {/* Using module.css */}
        <video
          className={styles.video}
          loop
          autoPlay
          muted
          onPlay={handleVideoControl}
        >
          <source
            src={process.env.PUBLIC_URL + "assets/being-fit.mp4"}
            type="video/mp4"
          />
        </video>

        {textStatus && (
          <div className={animation ? styles["heading-container"] : ""}>
            <h1 className={animation ? styles.heading : ""}>
              Boost up your <br />
              <span className="fitness">fitness Challenge</span> <br />
              with us
            </h1>
          </div>
        )}

        {/* <CustomizedDialogs /> */}

        {/* <VideoComponent loop autoPlay muted onPlay={handleVideoControl}>
        <source
          src={process.env.PUBLIC_URL + "assets/being-fit.mp4"}
          type="video/mp4"
        />
      </VideoComponent>

      {textStatus && (
        <HeadingDivComponenet>
          <HeadingComponent>
            step up your <br />
            <span className="fitness">fitness Challenge</span> <br />
            with us
          </HeadingComponent>
        </HeadingDivComponenet>
      )} */}
      </div>

      <div>
        <DialogContextProvider>
          <Navbar />
        </DialogContextProvider>

        <Gallery />
        <Services />
        <Trainers />
        <Pricing />
        <About />
        <CelebrityQuotes />
        <Contact />
        <Footer />
      </div>
    </section>
  );
};

export default Home;
