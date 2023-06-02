import React, { useState } from "react";
import Card from '../../Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = function (event, key) {
    setTitle('Giant Testicles!!!');
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'><h2>${props.amount}</h2></div>
      </div>
      <button onClick={clickHandler}>Change Price</button>
    </Card>
  );
}

export default ExpenseItem;