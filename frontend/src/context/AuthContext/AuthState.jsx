import { createContext, useEffect } from "react";
import React, { useState } from "react";

const AuthContext = createContext();
const AuthState = ({ children }) => {
  const [Auth, setAuth] = useState(false);

  // useEffect(() => {
  // console.log("Auth", Auth);
  // }, [Auth]);

  return (
    <AuthContext.Provider value={{ Auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext };

export default AuthState;
