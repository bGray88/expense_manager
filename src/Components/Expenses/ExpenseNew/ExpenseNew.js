import React from "react";
import './ExpenseNew.css';
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const ExpenseNew = (props) => {
  return (
    <div className="expense-new">
      <ExpenseForm />
    </div>
  );
}

export default ExpenseNew;