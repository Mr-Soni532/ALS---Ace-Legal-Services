import { createContext, useEffect } from "react";
import React, { useState } from "react";

const UserContext = createContext();
const UserState = ({ children }) => {
  const [UserDetails, setUserDetails] = useState({});

  // useEffect(() => {
  // console.log("UserDetails", UserDetails);
  // }, [UserDetails]);

  return (
    <UserContext.Provider value={{ UserDetails, setUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContext };

export default UserState;
