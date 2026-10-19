import { useContext } from "react";
import AddExpense from "./components/AddExpenses";
import ExpensesList from "./components/ExpensesList";
import { expenseContext } from "./context/ExpenseContext";
import ExpenseStats from "./components/ExpenseState";

const App = () => {
    const { expenseList } = useContext(expenseContext);

    console.log("expenseList", expenseList);

    return (
        <>
            <AddExpense />
            <br />
            <br />
            <br />
            <ExpensesList />
            <br/>
            <ExpenseStats/>
        </>
    );
};

export default App;