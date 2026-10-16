
import React from "react"
import AddExpense from "../Components/AddExpense"


const App=()=>{

const handleadd =(input)=>{
    AddExpense(input);
}

    return(
        <>
        <add handleAdd={handleadd}/>
      <ListExpense expenseList={expenseList} />
        </>
    )
}

export default App