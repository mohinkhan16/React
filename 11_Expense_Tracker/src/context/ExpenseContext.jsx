
import React, { Children, createContext, useState } from "react";

export const expenseContext = createContext();

const initialValues =[
    {
        id:1,
        Title:"Game",
        Description:"Fun",
        Amount:1000,
        Date:"19-01-2024",
        Category:"Playing",
        Type:"debit",
    },
    {
        id:2,
        Title:"reading",
        Description:"Knowladge",
        Amount:10000,
        Date:"18-01-2024",
        Category:"For knowledge",
        Type:"debit",
    }
];

const expenseContextProvider =({Children})=>{
    const [expenseList,setExpenesList]=useState(initialValues);

    const addExpense=(input)=>{
        const newExpense ={
            ...input,
            id:Date.now(),
        };

        setExpenesList((prev)=>[...prev,newExpense]);
    };

    const value={
        expenseList,
        addExpense
    };

    return(
        <expenseContext.Provider value={value}>
            {Children}
        </expenseContext.Provider>
    );
};

export default expenseContextProvider;
