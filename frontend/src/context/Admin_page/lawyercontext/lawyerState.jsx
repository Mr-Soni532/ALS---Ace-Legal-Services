
import React, { useEffect, useState } from "react";
import LawyerContext from "./lawyerContext"

const LawyerState = ( {children} ) => {
    const [lawyers, setLawyers] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/users"

    const getLawyer =  async () => {
        // API call
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const json = await response.json()
        // console.log(json)
        setLawyers(json)
    }

    return (
        <LawyerContext.Provider value={{ getLawyer , lawyers }}>
            {children}
        </LawyerContext.Provider>
    )
}

export default LawyerState