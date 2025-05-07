import React, { createContext } from "react";
import app from "../../firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
   




    const user = {
        name: "Aminur"
    }



  return( 
  <AuthContext.Provider value={user}>
    {children}
</AuthContext.Provider>)
};

export default AuthProvider;
