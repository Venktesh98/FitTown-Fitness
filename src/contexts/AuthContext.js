import { createContext } from "react";
import { useFirebaseOperations } from "../Hooks/useFirebaseOperations";

// creating context api
const AuthContext = createContext();

export default AuthContext;

export const AuthContextProvider = ({ children }) => {
  console.log("In create context");
  const allAuthOperations = useFirebaseOperations();
  console.log("authOperations.......", allAuthOperations);
  return (
    <AuthContext.Provider value={allAuthOperations}>
      {children}
    </AuthContext.Provider>
  );
};
