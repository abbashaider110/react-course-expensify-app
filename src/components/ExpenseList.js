import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpense from '../selectors/expenses';

export const ExpenseList = (props) =>(
    <div>
    {
        props.expenses.length === 0 ?(
        <p> No Expense </p>
        ) : (
            props.expenses.map((expense)=>{
                return <ExpenseListItem key = {expense.id} {...expense}/> // key is needed cause we are transferring props to the child, by spreading(...expense) we get access of all properties of expense for expenselistitem
            })
        )
    }
    
    </div>
);

const mapStateToProps = (state)=>{
    return {
        expenses: selectExpense(state.expenses,state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList); //connect takes an argument which is basically your state, and than from thr you can get state values as props

