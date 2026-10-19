import React, { useState, useContext } from "react";
import { expenseContext } from "../context/ExpenseContext";

const AddExpense = () => {
  const { handleAdd, editVal } = useContext(expenseContext);

  const [input, setInput] = useState({
    Title: "",
    Description: "",
    Amount: "",
    Date: "",
    Category: "General Expenses",
    ExpenseType: "Debit",
  });

  const handleChange = (field, e) => {
    setInput((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleAdd(input);

    setInput({
      Title: "",
      Description: "",
      Amount: "",
      Date: "",
      Category: "General Expenses",
      ExpenseType: "Debit",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Title">Title</label>
      <input
        id="Title"
        type="text"
        placeholder="Enter your title"
        value={input.Title}
        onChange={(e) => handleChange("Title", e)}
      />

      <br /><br />

      <label htmlFor="Description">Description</label>
      <input
        id="Description"
        type="text"
        placeholder="Enter your Description"
        value={input.Description}
        onChange={(e) => handleChange("Description", e)}
      />

      <br /><br />

      <label htmlFor="Amount">Amount</label>
      <input
        id="Amount"
        type="number"
        placeholder="Enter Amount"
        value={input.Amount}
        onChange={(e) => handleChange("Amount", e)}
      />

      <br /><br />

      <label htmlFor="Date">Date</label>
      <input
        id="Date"
        type="date"
        value={input.Date}
        onChange={(e) => handleChange("Date", e)}
      />

      <br /><br />

      <label htmlFor="Category">Category</label>
      <select
        id="Category"
        value={input.Category}
        onChange={(e) => handleChange("Category", e)}
      >
        <option value="">Select</option>
        <option value="Money Transfer">Money Transfer</option>
        <option value="Cash Withdrawal">Cash Withdrawal</option>
        <option value="General Expenses">General Expenses</option>
        <option value="Food&Dining">Food&Dining</option>
        <option value="HealthCare">HealthCare</option>
        <option value="Shopping">Shopping</option>
        <option value="Travel">Travel</option>
      </select>

      <br /><br />

      <label htmlFor="ExpenseType">Type</label>
      <select
        id="ExpenseType"
        value={input.ExpenseType}
        onChange={(e) => handleChange("ExpenseType", e)}
      >
        <option value="Credit">Credit</option>
        <option value="Debit">Debit</option>
      </select>

      <br /><br />

      <button type="submit">
        {editVal ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default AddExpense;