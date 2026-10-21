import { useContext } from "react";
import AddExpense from "./components/AddExpenses";
import { expenseContext } from "./context/ExpenseContext";
import ExpenseStats from "./components/ExpenseState";
import ExpensFrom from "./components/ExpenseFrom";
import Counter from "./concept/Counter";

const App = () => {
    const { expenseList } = useContext(expenseContext);

    console.log("expenseList", expenseList);

    return (
        <>
            <AddExpense />
            <br />
            <br />
            <br/>
            <ExpenseStats/>
            <br />
            <ExpensFrom/>
            <Counter/>
        </>
    );
};

export default App;