
import { useContext, useState } from "react";
import { expenseContext } from "../context/ExpenseContext";

const ExpensFrom = () => {
  const {
    expenseList,
    editVal,
    handleEdit,
    handleDelete,
  } = useContext(expenseContext);

  const [expenseQuery, setexpenseQuery] = useState({
    Title: "",
    ExpenseType: "all",
    Category: "all",
    sortBy: "asc",
  });

  // Handle input changes
  const handleChange = (field, e) => {
    setexpenseQuery((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  // Handle search form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Query:", expenseQuery);
  };

  // Reset all filters
  const handleReset = () => {
    setexpenseQuery({
      Title: "",
      ExpenseType: "all",
      Category: "all",
      sortBy: "asc",
    });
  };

  // Filter and sort expenses
  const filterList = expenseList
    .filter((item) =>
      item.Title.toLowerCase().includes(
        expenseQuery.Title.toLowerCase()
      )
    )
    .filter((item) =>
      expenseQuery.ExpenseType === "all"
        ? true
        : item.ExpenseType === expenseQuery.ExpenseType
    )
    .filter((item) =>
      expenseQuery.Category === "all"
        ? true
        : item.Category === expenseQuery.Category
    )
    .sort((a, b) => {
      if (expenseQuery.sortBy === "asc") {
        return a.Title.localeCompare(b.Title);
      }

      if (expenseQuery.sortBy === "desc") {
        return b.Title.localeCompare(a.Title);
      }

      if (expenseQuery.sortBy === "moneyAsc") {
        return a.Amount - b.Amount;
      }

      if (expenseQuery.sortBy === "moneyDesc") {
        return b.Amount - a.Amount;
      }

      return 0;
    });

  return (
    <>
      <h2>Expense Search & Filter</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="Enter title"
          value={expenseQuery.Title}
          onChange={(e) => handleChange("Title", e)}
        />

        <br />
        <br />

        <label htmlFor="expenseType">Expense Type</label>
        <select
          id="expenseType"
          value={expenseQuery.ExpenseType}
          onChange={(e) => handleChange("ExpenseType", e)}
        >
          <option value="all">All Types</option>
          <option value="Credit">Credit</option>
          <option value="Debit">Debit</option>
        </select>

        <br />
        <br />

        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={expenseQuery.Category}
          onChange={(e) => handleChange("Category", e)}
        >
          <option value="all">All Categories</option>
          <option value="Money Transfer">Money Transfer</option>
          <option value="Cash Withdrawal">Cash Withdrawal</option>
          <option value="General Expenses">General Expenses</option>
          <option value="General Expense">General Expense</option>
          <option value="Food&Dining">Food&Dining</option>
          <option value="HealthCare">HealthCare</option>
          <option value="Shopping">Shopping</option>
          <option value="Travel">Travel</option>
        </select>

        <br />
        <br />

        <label htmlFor="sortBy">Sort By</label>
        <select
          id="sortBy"
          value={expenseQuery.sortBy}
          onChange={(e) => handleChange("sortBy", e)}
        >
          <option value="asc">Title: A to Z</option>
          <option value="desc">Title: Z to A</option>
          <option value="moneyAsc">Amount: Low to High</option>
          <option value="moneyDesc">Amount: High to Low</option>
        </select>

        <br />
        <br />

        <button type="submit">Search</button>{" "}
        <button type="button" onClick={handleReset}>
          Clear All Filters
        </button>
      </form>

      <br />

      <p>Total Expenses Found: {filterList.length}</p>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Category</th>
            <th>Expense Type</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {filterList.length > 0 ? (
            filterList.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.Title}</td>
                <td>{item.Description}</td>
                <td>{item.Amount}</td>
                <td>{item.Date}</td>
                <td>{item.Category}</td>
                <td>{item.ExpenseType}</td>

                <td>
                  <button
                    type="button"
                    onClick={() => handleEdit(item.id)}
                  >
                    Edit
                  </button>
                </td>

                <td>
                  <button
                    type="button"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">No expenses found.</td>
            </tr>
          )}
        </tbody>
      </table>

      {editVal && (
        <p>Editing expense: {editVal.Title}</p>
      )}
    </>
  );
};

export default ExpensFrom;