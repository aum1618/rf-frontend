import React, { createContext, useState, useEffect } from "react";

export const UserDataContext = createContext();

export default function UserDataContextProvider({ children }) {
  const [authToken, setAuthToken] = useState(
    localStorage.getItem("authToken") || null
  );
  const [userInfo, setUserInfo] = useState(
    localStorage.getItem("userInfo") || null
  );

  useEffect(() => {
    // Store the token and user info in localStorage
    localStorage.setItem("authToken", authToken);
    localStorage.setItem("userInfo", userInfo);
  }, [authToken, userInfo]);

  const updateAuthToken = (token) => {
    setAuthToken(token);
    console.log("token saved in", token);
  };

  const updateUserInfo = (info) => {
    setUserInfo(info);
    console.log("userInfo saved as", info);
  };

  const userData = {
    authToken,
    userInfo,
    updateAuthToken,
    updateUserInfo,
  };

  return (
    <UserDataContext.Provider value={userData}>
      {children}
    </UserDataContext.Provider>
  );
}
