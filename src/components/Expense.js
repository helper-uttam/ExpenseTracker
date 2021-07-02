import React, {useState} from 'react';
import "./Expense.css"
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from './ExpenseList';

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
                <ExpenseList items={filteredExpenses} />
            </Card>
        </div>
        
    );
}

export default Expense;