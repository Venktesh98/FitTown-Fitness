import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

export const HomeLayout = () => {
  const { currentUser } = useAuth();

  //  If user is authenticated
  if (currentUser) {
    // return <Navigate to="#" />;
  }

  return <Outlet />;
};
