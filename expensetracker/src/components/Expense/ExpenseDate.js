import React from 'react'
import './ExpenseDate.css'

export const ExpenseDate = (props) => {
    const expenseDate = {
        month : props.date.toLocaleString('en-US',{month : 'long'}),
        year : props.date.getFullYear(),
        day : props.date.toLocaleString('en-US' , {day : '2-digit'})
    }
    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{expenseDate.month}</div>
            <div className='expense-date__year'>{expenseDate.year}</div>
            <div className='expense-date__day'>{expenseDate.day}</div>    
        </div>
    )
}
