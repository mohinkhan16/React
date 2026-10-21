
import React, { useContext } from "react";
import { expenseContext } from "../context/ExpenseContext";

const ExpenseStats = () => {
    const { expenseList } = useContext(expenseContext);

    const Credit = expenseList
        .filter((expense) => expense.ExpenseType === "Credit")
        .reduce((total, expense) => total + Number(expense.Amount), 0);

    const Debit = expenseList
        .filter((expense) => expense.ExpenseType === "Debit")
        .reduce((total, expense) => total + Number(expense.Amount), 0);

    const balance = Credit - Debit;

    return (
        <div className="stats">
            <h2>Credit: ₹{Credit}</h2>
            <h2>Debit: ₹{Debit}</h2>
            <h2>Balance: ₹{balance}</h2>
        </div>
    );
};

export default ExpenseStats;
