import React from "react";
import Card from '../../Card/Card';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './Expenses.css'

const Expenses = (props) => {
  return (
    <Card className='expenses'>
      { props.items.map ((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          date={item.date}
          amount={item.amount}
        />
      ))}
    </Card>
  )
}

export default Expenses;