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
      <div className={`back-to-top ${showTopNavigationButton ? "active" : ""}`}>
        {showTopNavigationButton && <ArrowUpwardIcon />}
      </div>

      <Navbar />
      <AuthContextProvider>
        {/* Defining Routes */}
        <Routes>
          {/* Nested Route way i.e using Outlet */}
          <Route element={<HomeLayout />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

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
      </AuthContextProvider>

      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Home /> */}
      {/* <CustomizedDialogs /> */}
      <Trainers />
      <Gallery />
      <Pricing />
      <Contact />
      {/* <About />
      <Footer /> */}
    </div>
  );
}

export default App;
