import React, { useEffect, useState } from "react";
import UserContext from "./userContext";

const UserState = ({ children }) => {
  const [users, setUser] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  const getUser = async () => {
    // API call
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    // console.log(json)
    setUser(json);
  };

  return (
    <UserContext.Provider value={{ getUser, users }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
