import React, { useState } from "react";

import Card from '../../Card/Card';

import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpensesChart from "../ExpensesChart/ExpensesChart";

import './Expenses.css'

const Expenses = (props) => {
  const [filterDate, setFilterDate] = useState('2021');

  const filterExpenses = (selectedFilterDate) => {
    setFilterDate(selectedFilterDate);
  };

  const filteredExpenses = props.items.filter ((item) => {
    return item.date.toLocaleString('en-US', {year: 'numeric'}) === filterDate;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selectedYear={filterDate} onDateChange={filterExpenses} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses;