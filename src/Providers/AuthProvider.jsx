import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);


  const createUser = (email, password) => {
    return (createUserWithEmailAndPassword(auth, email, password))
    
  }

  const resetPass = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

 

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    fetch("/campaigns.json")
      .then((res) => res.json())
      .then((data) => {
        setCampaigns(data);
        // setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load campaigns:", error);
        // setLoading(false); // still stop loading even on error
      });
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  console.log(user);

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // console.log(user.displayName);

  const authInfo = {
    auth,
    campaigns,
    loading,
    user,
    setUser,
    createUser,
    logOut,
    login,
    resetPass,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
