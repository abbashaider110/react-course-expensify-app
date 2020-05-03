import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectExpenseTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

export const ExpenseSummary = ({expenseCount, expenseTotal}) =>{
    const formatExpenseTotal = numeral(expenseTotal / 100).format('$0,0.00');
    const   expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
return (
    <div>
    <h1>Viewing {expenseCount} {expenseWord} totalling {formatExpenseTotal}</h1>
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