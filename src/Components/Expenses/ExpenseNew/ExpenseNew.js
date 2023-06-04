import React, { useState } from "react";

import './ExpenseNew.css';

import ExpenseForm from "../ExpenseForm/ExpenseForm";

const ExpenseNew = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const cancelEditingHandler = () => {
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <div className="expense-new">
        <button onClick={startEditingHandler}>Add New Expense</button>
      </div>
    );
  }

  return (
    <div className="expense-new">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelEditingHandler} />
    </div>
  );
}

export default ExpenseNew;