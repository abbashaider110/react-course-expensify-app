import expensesReducer from '../../reducers/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('should give default state', ()=>{
    const state = expensesReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id',()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});
test('should not remove expense by wrong id',()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});
test('should add expense',()=>{
    const action = {
        type: 'ADD_EXPENSE',
        expense:{
            id:'4',
            description: '4th expense',
            note:'',
            amount: 4000,
            createdAt: 25
        }
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([...expenses,action.expense]);
});

test('should edit amount',()=>{
    const amount = 12500;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates:{
            amount
        }
    };
    const state = expensesReducer(expenses,action);
    expect(state[1].amount).toEqual(amount);

});
test('should not edit amount with wrong id',()=>{
    const amount = 12500;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates:{
            amount
        }
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);

});

test('should set expenses', () =>{
    const action = {
        type: 'SET_EXPENSES',
        expenses:[expenses[1]]
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[1]]);
})