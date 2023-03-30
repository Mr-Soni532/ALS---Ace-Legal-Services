// https://jsonplaceholder.typicode.com/users

import React, { useState } from "react";
import UserContext from "./userContext"

const UserState = ( {children} ) => {
    const [user, setUser] = useState([]);

    const getUser =  async () => {
        // API call
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
                // 'auth-token': localStorage.getItem('token')
            },
        });

        const json = await response.json()
        console.log(json)
        setUser(json)
    }

    return (
        <UserContext.Provider value={{ getUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserState