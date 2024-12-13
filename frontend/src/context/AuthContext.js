import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [judgeName, setJudgeName] = useState("");
  const [judgeEmail, setJudgeEmail] = useState("");

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, judgeName, setJudgeName, judgeEmail, setJudgeEmail }}>
      {children}
    </AuthContext.Provider>
  );
};
