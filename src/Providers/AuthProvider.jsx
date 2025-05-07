import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [campaigns, setCampaigns] = useState([])
   

    useEffect(()=>{
        fetch("./campaigns.json")
        .then(res=> res.json())
        .then(data => setCampaigns(data))

    }, [])




    const authInfo = {
        campaigns,
    }



  return( 
  <AuthContext.Provider value={authInfo}>
    {children}
</AuthContext.Provider>)
};

export default AuthProvider;
