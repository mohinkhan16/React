// import { createContext, useState } from "react";

// export const expenseContext = createContext({
//     expenseList: [],
//     editVal: null,
//     handleAdd: () => {},
//     handleDelete: () => {},
//     handleEdit: () => {},
// });

// const ExpenseContext = ({ children }) => {
//     const initialValue = [
//         {
//             id: 1,
//             Title: "Playing",
//             Description: "Cricket",
//             Amount: 200,
//             Date: "15-09-2024",
//             Category: "General Expenses",
//             ExpenseType: "Debit",
//         },
//         {
//             id: 2,
//             Title: "movie",
//             Description: "spider man 2",
//             Amount: 500,
//             Date: "2026-10-15",
//             Category: "general expense",
//             ExpenseType: "Debit",
//         },
//     ];

//     const [expenseList, setExpenseList] = useState(initialValue);
//     const [editValue, setEditValue] = useState(null);

//     const handleAdd = (input) => {
//         const newExpense = {
//             id: new Date().getTime(),
//             ...input,
//         };

//         setExpenseList((prev) => [...prev, newExpense]);
//     };

//     const handleDelete = (id) => {
//         setExpenseList((prev) =>
//             prev.filter((expense) => expense.id !== id)
//         );
//     };

//     const handleEdit = (id) => {
//         const editExpense = expenseList.find(
//             (expense) => expense.id === id
//         );

//         setEditValue(editExpense);
//     };


//     const value = {
//         expenseList,
//         editVal: editValue,
//         handleAdd,
//         handleDelete,
//         handleEdit,
//     };

//     return (
//         <expenseContext.Provider value={value}>
//             {children}
//         </expenseContext.Provider>
//     );
// };

// export default ExpenseContext;

import react, { Children, createContext, useEffect, useReducer } from "react"

export const ExpenseContext =createContext({
    expenseList:[],
    addExpense:()=>{},
    deleteExpense :()=>{},
    handleExpenseEdit :()=>{},
    editVal:null,
    balance:0,
    credit:0,
    debit:0,
});

const initialValues={
    expenseList:[
        {
        id: 1,
      title: "food",
      description: "pizza",
      category: "food",
      amount: 1000,
      date: "2026-07-30",
      type: "debit",
        }
    ],
    editVal:null
};

const init = ()=>{
    try {
        
    } catch (error) {
        
    }
}

const expenseReducer = (state ,action)=>{
    switch(action.type){
        case "add":{
            const input = action.payload;

            if(state.editVal !== null){
                const updateList = state.expenseList.map((list)=>
                list.id === state.editVal.id ? {...list,...input}:list,);

                console.log("update",updateList);

                return{
                    ...state,
                    expenseList:updateList,
                    editVal:null
                };
            }else{
                const newExpense ={
                    id:new Date().getTime(),
                    title:input.title,
                    description:input.description,
                    category:input.category,
                    amount:input.amount,
                    date:input,date,
                    type:input.type
                };

                return{
                    ...state,
                    expenseList:[...state.expenseList,newExpense],
                }
            }
        }

        case "edit":{
            const value = action.payload;

            return{
                ...state,
                editVal:value
            };

        }
        case "delete":{
            const id = action.payload;

            const remainList = state.expenseList.filter((l)=> l.id !== id)

            return{
                ...state,
                expenseList :remainList
            };
        }
    }
};

const ExpenseContextProvider = ({Children})=>{
    const [state, dispatch]= useReducer(expenseReducer , initialValues,init);

    useEffect(()=>{
        const data = localStorage.setItem(
            "expense",
            JSON.stringify(state.expenseList),
        );
        console.log(localStorage.getItem("expense"));
    },[state.expenseList]);
}

const addExpense =(input)=>{
    if(!input){
        alert("all feild is requried")
    }
    dispatch({
        type:"add",
        payload:editVal,
    });
}

const handleExpenseEdit =(id)=>{
    const editExpense = state.expenseList.find((l)=> l.id === id);

    dispatch({
        type:edit,
        payload:editExpense,
    });
};

const deleteExpense =(id)=>{
    dispatch({
        type:"delete",
        payload:id,
    })
}

  const credit = state.expenseList
    .filter((l) => l.type === "credit")
    .reduce((acc, curr) => {
      return (acc += Number(curr.amount));
    }, 0);

  const debit = state.expenseList
    .filter((l) => l.type === "debit")
    .reduce((acc, curr) => {
      return (acc += Number(curr.amount));
    }, 0);

  const balance = credit - debit;

  const value = {
    expenseList: state.expenseList,
    addExpense,
    handleExpenseEdit,
    editValue: state.editValue,
    deleteExpense,
    credit,
    debit,
    balance,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );


export default ExpenseContextProvider;