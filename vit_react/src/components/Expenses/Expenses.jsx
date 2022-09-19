import React from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';
import { useState } from 'react';

const Expenses = (props) => {

  const [selectYear, setYear] = useState('2020');

const getSelectData = (selecetedyear) =>{
  setYear(selecetedyear)
}



  const filterExpenses = props.items.filter(x => {
    return x.date.getFullYear().toString() === selectYear;
  })


  let expensedata = <p style={{color: 'white'}}>No data Found</p>

  if(filterExpenses.length>0 ){
    expensedata = filterExpenses.map(x => {
      return  <ExpenseItem key={x.id}
            title={x.title}
            amount={x.amount}
            date={x.date}
        />
      }) 
  }

  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter onSelecetData={getSelectData} defaultYear={selectYear}/>
      </div>
      
      <p style={{color: 'white'}}>{selectYear}</p>
      <ExpensesChart expenses={filterExpenses}/>
      {expensedata}
     
    </Card>
  );
}

export default Expenses;
