import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/campaigns.json")
      .then((res) => res.json())
      .then((data) => {
        setCampaigns(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load campaigns:", error);
        setLoading(false); // still stop loading even on error
      });
  }, []);

  const authInfo = {
    campaigns,
    loading,
  };

  if (loading) {
    return (
      <div className="flex w-3/4 flex-col gap-4 m-10">
        <div className="skeleton h-[400px] md:h-[500px] w-full"></div>
        <div className="skeleton h-10 w-full  md:w-xl"></div>
        <div className="skeleton h-24 w-full"></div>
        <div className="skeleton h-6 w-[150px]"></div>
      </div>
    );
  } else {
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
  }
};

export default AuthProvider;
