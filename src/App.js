import "./App.css";
import Navbar from "./components/Gym/Navbar/Navbar";
import VideoText from "./components/Gym/LandingPage/VideoText";
import Contact from "./components/Gym/ContactDetails/Contact/Contact";
import Footer from "./components/Gym/Footer/Footer";
import Gallery from "./components/Gym/Gallery/Gallery";
import Trainers from "./components/Gym/Trainers/Trainers";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useEffect, useState } from "react";
import CustomizedDialogs from "./components/UI/Dialog/DialogControl";

function App() {
  const [showTopNavigationButton, setshowTopNavigationButton] = useState(false);

  const toggleNavigationVisibility = () => {
    if (window.pageYOffset > 300) {
      setshowTopNavigationButton(true);
    } else {
      setshowTopNavigationButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleNavigationVisibility);

    return () =>
      window.removeEventListener("scroll", toggleNavigationVisibility);
  }, []);

  return (
    <div>
      {/* <Navbar /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <VideoText /> */}
      <CustomizedDialogs />
      {/* <Trainers /> */}
      {/* <Gallery /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}

      <div className={`back-to-top ${showTopNavigationButton ? "active" : ""}`}>
        {showTopNavigationButton && <ArrowUpwardIcon />}
      </div>
    </div>
  );
}

export default App;
