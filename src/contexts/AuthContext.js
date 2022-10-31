import { createContext } from "react";
import { useFirebaseOperations } from "../Hooks/useFirebaseOperations";

// creating context api
const AuthContext = createContext();

export default AuthContext;

export const AuthContextProvider = ({ children }) => {
  const allAuthOperations = useFirebaseOperations();

  return (
    <AuthContext.Provider value={allAuthOperations}>
      {children}
    </AuthContext.Provider>
  );
};
