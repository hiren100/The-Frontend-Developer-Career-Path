import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

const onExpenseDataHandler = (enteredExpenseData) =>{
  const expenseData = {
    ...enteredExpenseData,
    id: Math.random().toPrecision(2).toString()
  }
  console.log(expenseData)
  props.onAddExpense(expenseData)
}

  return (
    <div className='new-expense'>
      <ExpenseForm onExpenseData={onExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
