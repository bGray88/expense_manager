import React, { useState } from "react";

import Card from '../../Card/Card';

import ExpenseDate from '../ExpenseDate/ExpenseDate';

import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'><h2>${props.amount}</h2></div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;