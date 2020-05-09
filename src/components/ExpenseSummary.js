import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectExpenseTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import {Link} from 'react-router-dom';

export const ExpenseSummary = ({expenseCount, expenseTotal}) =>{
    const formatExpenseTotal = numeral(expenseTotal / 100).format('$0,0.00');
    const   expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
return (
    <div className="page-header">
    <div className="content-container">
    <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formatExpenseTotal}</span></h1>
    <div className="page-header__actions">
    <Link to="/create" className="button">Add Expense</Link>
    </div>
    </div>
    
    </div>
)
};

const mapStateToProps = (state) => {
 const visibleExpenses = selectExpenses(state.expenses,state.filters);
 return{
     expenseCount: visibleExpenses.length,
     expenseTotal: selectExpenseTotal(visibleExpenses)
 }
}

export default connect(mapStateToProps)(ExpenseSummary);