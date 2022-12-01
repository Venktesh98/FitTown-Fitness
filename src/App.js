import "./App.css";
import Home from "./components/Gym/LandingPage/Home";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/Authentication/ProtectedRoutes/ProtectedRoute";
import { HomeLayout } from "./components/Authentication/ProtectedRoutes/HomeLayout";
import Dashboard from "./components/Gym/Dashboard/Dashboard";
import NotFound from "./components/Errors/NotFound";
import { animateScroll as scroll } from "react-scroll";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        className={`back-to-top ${
          showTopNavigationButton ? "activate-animation" : ""
        }`}
        onClick={scrollToTop}
      >
        {showTopNavigationButton && <ArrowUpwardIcon />}
      </div>

      <AuthContextProvider>
        {/* Defining Routes */}
        <Routes>
          {/* Nested Route way i.e using Outlet */}
          <Route element={<HomeLayout />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route path="*" element={<NotFound />} />

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
      </AuthContextProvider>

      {/* Root container i.e used for displaying the Toast's messages */}
      <ToastContainer />
    </div>
  );
}

export default App;
