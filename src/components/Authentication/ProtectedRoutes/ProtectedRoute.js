import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { useToast } from "../../../Hooks/useToast";
import LoadingSpinner from "../../UI/LoadingSpinner/LoadingSpinner";

const ProtectedRoute = ({ children }) => {
  const { currentUser, isLoading } = useAuth();
  const location = useLocation();
  const toastResponse = useToast();

  // variables for Toast Messages
  let type = undefined;
  let message = undefined;

  if (isLoading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  //  if user is not authenticated
  if (!currentUser) {
    toastResponse((type = "info"), (message = "Please Login first"));
    return <Navigate to="/" replace state={{ path: location?.pathname }} />;
  }

  // to render other component when ProtectedRoute is not in use i.e use of children comes into the picture
  return children ? children : <Outlet />;
  // return <Outlet />;
};

export default ProtectedRoute;
