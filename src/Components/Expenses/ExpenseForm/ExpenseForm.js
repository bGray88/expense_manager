import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [entDate, setEntDate]     = useState('');
  const [entAmount, setEntAmount] = useState('');
  const [entTitle, setEntTitle]   = useState('');

  const titleChangeHandler = (event) => {
    setEntTitle(event.target.value);
  }
  const amountChangeHandler = (event) => {
    setEntAmount(event.target.value);
  }
  const dateChangeHandler = (event) => {
    setEntDate(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title:  entTitle,
      amount: +entAmount,
      date:   new Date(entDate)
    }

    props.onSaveExpenseData(expenseData);
    setEntTitle('');
    setEntAmount('');
    setEntDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='expense-new__controls'>
        <div className='expense-new__control'>
          <label>Title</label>
          <input type="text" value={entTitle} onChange={titleChangeHandler} />
        </div>
        <div className='expense-new__control'>
          <label>Amount</label>
          <input type="number" value={entAmount} min={0.01} step={0.01} onChange={amountChangeHandler} />
        </div>
        <div className='expense-new__control'>
          <label>Date</label>
          <input type="date" value={entDate} min={'2019-01-01'} max={'2024-01-01'} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="expense=new__actions">
        <button onClick={props.onCancel} type='button'>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;