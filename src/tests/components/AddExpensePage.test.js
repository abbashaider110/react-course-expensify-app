import React from 'react';
import {shallow} from 'enzyme';
import {AddExpensePage} from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let startAddExpense,history,wrapper;

beforeEach(() =>{ // now this will run everytime brfore each test
  startAddExpense = jest.fn();
  history = {push: jest.fn()};
  wrapper = shallow(<AddExpensePage startAddExpense = {startAddExpense} history = {history} />)
});

test('should render addexpense page', () =>{
    expect(wrapper).toMatchSnapshot();
})

test('should handle onsubmit', () =>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
})