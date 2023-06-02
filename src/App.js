import React from "react";
import ExpenseNew from "./Components/Expenses/ExpenseNew/ExpenseNew";
import Expenses from "./Components/Expenses/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
    { 
      id: 'e2',
      title: 'Giant Testicles',
      amount: 799.49,
      date: new Date(2021, 2, 1) 
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28)
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12)
    }
  ];
  
  return (
    <div>
      <ExpenseNew />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
