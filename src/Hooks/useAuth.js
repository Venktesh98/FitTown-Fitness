import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const useAuth = () => {
  console.log("In useConbtext");
  return useContext(AuthContext);
};

export default useAuth;
