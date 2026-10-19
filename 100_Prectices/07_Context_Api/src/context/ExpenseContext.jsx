import { createContext, useState } from "react";

export const expenseContext = createContext({
    expenseList: [],
    editVal: null,
    handleAdd: () => {},
    handleDelete: () => {},
    handleEdit: () => {},
});

const ExpenseContext = ({ children }) => {
    const initialValue = [
        {
            id: 1,
            Title: "Playing",
            Description: "Cricket",
            Amount: 200,
            Date: "15-09-2024",
            Category: "General Expenses",
            ExpenseType: "Debit",
        },
        {
            id: 2,
            Title: "movie",
            Description: "spider man 2",
            Amount: 500,
            Date: "2026-10-15",
            Category: "general expense",
            ExpenseType: "Debit",
        },
    ];

    const [expenseList, setExpenseList] = useState(initialValue);
    const [editValue, setEditValue] = useState(null);

    const handleAdd = (input) => {
        const newExpense = {
            id: new Date().getTime(),
            ...input,
        };

        setExpenseList((prev) => [...prev, newExpense]);
    };

    const handleDelete = (id) => {
        setExpenseList((prev) =>
            prev.filter((expense) => expense.id !== id)
        );
    };

    const handleEdit = (id) => {
        const editExpense = expenseList.find(
            (expense) => expense.id === id
        );

        setEditValue(editExpense);
    };


    const value = {
        expenseList,
        editVal: editValue,
        handleAdd,
        handleDelete,
        handleEdit,
    };

    return (
        <expenseContext.Provider value={value}>
            {children}
        </expenseContext.Provider>
    );
};

export default ExpenseContext;