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

  return (
    <form>
      <div className='expense-new__controls'>
        <div className='expense-new__control'>
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className='expense-new__control'>
          <label>Amount</label>
          <input type="number" min={0.01} step={0.01} />
        </div>
        <div className='expense-new__control'>
          <label>Date</label>
          <input type="date" min={'2019-01-01'} max={'2024-01-01'} />
        </div>
      </div>
      <div className="expense=new__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;