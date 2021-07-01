import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import "./Expense.css"
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter";

function Expense(props)
{
    const [filteredYear, setFilteredyear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredyear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return(
            expense.date.getFullYear().toString() === filteredYear
        );
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                    {filteredExpenses.length === 0 && <p>No expense found.</p>}
                    {filteredExpenses.length>0 && filteredExpenses.map((expense) => {
                    return <ExpenseItem 
                    key = {expense.id}
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date} />
                    })}
            </Card>
        </div>
        
    );
}

export default Expense;