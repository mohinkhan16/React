

export const ListExpense =({expenseList})=>{
    return(
        <div className="expense-list">
            <H2>Expense List</H2>

            <table border={1} cellPadding="10">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>amount</th>
                        <th>Date</th>
                        <th>Type</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
            </table>

            <tbody>
                {expenseList.map((expense)=>{
                    <tr key={expense.id}>
                        <td>key={expense.id}</td>
                        <td>Key={expense.title}</td>
                        <td>key={expense.description}</td>
                        <td>key={expense.category}</td>
                        <td>key={expense.date}</td>
                        <td>key={expense.type}</td> 
                    <td><button>Update</button></td>
                     <td><button>Delete</button></td>
                    </tr>
                })}
            </tbody>
        </div>
    )
}

export default ListExpense;