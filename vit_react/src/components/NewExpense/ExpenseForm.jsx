import React from 'react';
import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

  const  [title, setTitle] = useState('')
  const  [amount, setAmount] = useState('')
  const  [date, setDate] = useState('')


  const handelTitle = (e) =>{
    let data1 = e.target.value
    setTitle(data1)
  }
  const handelAmount = (e) =>{
    let data2 = e.target.value
    setAmount(data2)
  }  

  const handelDate = (e) =>{
    let data3 = e.target.value
    setDate(data3)
  }

  const submitHandler = (event) =>{
    event.preventDefault();

    const expenseData = {
      title : title,
      amount : +amount,
      date: new Date(date)
    }

    props.onExpenseData(expenseData)

    setTitle("")
    setAmount("")
    setDate("")

    props.onHide(false)

  }



  return (
    <form onSubmit={submitHandler} className={`${props.class ? 'visible' : 'disable'}`}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={title} onChange={handelTitle}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={amount} onChange={handelAmount}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' value={date} onChange={handelDate} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onHide}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
