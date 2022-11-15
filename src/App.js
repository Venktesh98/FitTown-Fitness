import "./App.css";
import Navbar from "./components/Gym/Navbar/Navbar";
import Home from "./components/Gym/LandingPage/Home";
import Contact from "./components/Gym/ContactDetails/Contact/Contact";
import Footer from "./components/Gym/Footer/Footer";
import Gallery from "./components/Gym/Gallery/Gallery";
import Trainers from "./components/Gym/Trainers/Trainers";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useEffect, useState } from "react";
import CustomizedDialogs from "./components/UI/Dialog/DialogControl";
import About from "./components/Gym/About/About";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/Authentication/ProtectedRoutes/ProtectedRoute";
import { HomeLayout } from "./components/Authentication/ProtectedRoutes/HomeLayout";
import Pricing from "./components/Gym/PriceList/Pricing";
import { DialogContextProvider } from "./contexts/DialogContext";
import NotFound from "./components/Errors/NotFound";
import { animateScroll as scroll } from "react-scroll";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Services from "./components/Gym/Services/Services";

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

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div>
      <div
        className={`back-to-top ${showTopNavigationButton ? "activate-animation" : ""}`}
        onClick={scrollToTop}
      >
        {showTopNavigationButton && <ArrowUpwardIcon />}
      </div>

      <AuthContextProvider>
        <DialogContextProvider>
          <Navbar />
          {/* <Pricing /> */}
        </DialogContextProvider>

        {/* Defining Routes */}
        <Routes>
          {/* Nested Route way i.e using Outlet */}
          <Route element={<HomeLayout />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            {/* will come Dashboard here */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Route>

          {/* <Route path="*" element={<NotFound />} /> */}

          {/* Native Way i.e not ideal in case we have too many routes */}
          {/* <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />

          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            }
          /> */}
        </Routes>

        {/* <CustomizedDialogs /> */}
        {/* <Pricing /> */}
      </AuthContextProvider>
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Home /> */}
      {/* <CustomizedDialogs /> */}
      {/* <Trainers />
      <Gallery />
      <Pricing />
      <Contact /> */}
      {/* <About />
      <Footer /> */}

      {/* <Services /> */}

      <ToastContainer />
    </div>
  );
}

export default App;
