import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const  [isShowForm, setShowForm] = useState(false)


const onExpenseDataHandler = (enteredExpenseData) =>{
  const expenseData = {
    ...enteredExpenseData,
    id: Math.random().toPrecision(2).toString()
  }
  console.log(expenseData)
  props.onAddExpense(expenseData)
}

const handleShowForm = () =>{
  setShowForm(true)
}

const handleHideForm = () =>{
  setShowForm(false)
}

  return (
    <div className='new-expense'>
      {!isShowForm && 
      <button type='button' onClick={handleShowForm}>New Add Expense</button>
      }
      {isShowForm && <ExpenseForm onExpenseData={onExpenseDataHandler} onHide={handleHideForm}/>}
    </div>
  );
};

export default NewExpense;
