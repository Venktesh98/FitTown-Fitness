import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { currentUser, isLoading } = useAuth();
  const location = useLocation();

  console.log("Location:", location);

  if (isLoading) {
    return <div>Loading.....</div>;
  }

  //  if user is not authenticated
  if (!currentUser) {
    return <Navigate to="/" replace state={{ path: location?.pathname }} />;
  }

  // to render other component when ProtectedRoute is not in use i.e use of children comes into the picture
  return children ? children : <Outlet />;
  // return <Outlet />;
};

export default ProtectedRoute;
