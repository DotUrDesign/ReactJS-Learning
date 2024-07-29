import React from "react";
import {useState, useEffect} from "react";

/*
    Difference between "."(dot) notation and "[]"(brackets) notation
    - dot notation is used when the property name is known and it is a valid identifier.

    - brackets notation is used when the property name is stored in a variable, includes special characters, or needs to be accessed dynamically.
*/

export const useCurrencyInfo = (from) => {
    const [data, setData] = useState({});  // useEffect neither returns any value not it stores any value in a variable directly. So, to store the result, we need to use "useState" hook.


    // whenever I change the currency, I want to fetch the information once again.
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`)
        .then(res => res.json())
        .then(res => setData(res[from]))
      }, [from])

    console.log(from);
    console.log(data[from]);
    return data;
}