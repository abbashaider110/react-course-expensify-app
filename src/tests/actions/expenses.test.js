import {addExpense,removeExpense,editExpense} from '../../actions/expenses';

test('should setup rmeove expense action object',() =>{
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({ // toequal compares the array or object properties
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup update expense action object', () =>{
    const action = editExpense('123abc',{note:'A new note'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id:'123abc',
        updates:{
            note:'A new note'
        }
        
    });
});

test('should setup add expense with values', ()=>{
    const expenseData = {
        description: 'rent',
        amount: 12345,
        createdAt: 1000,
        note: 'A note'
    };

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            ...expenseData, // we spread out the expensedata object, means it will take the whole object
            id: expect.any(String)
        }
        
    });
});

test('should setup addexpense with no values', () =>{
    // const expenseData = {
    //     description:'',
    //     note:'',
    //     amount:0,
    //     createdAt:0
    // };
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            description:'',
            note:'',
            amount:0,
            createdAt:0,
            id: expect.any(String)
        }
    });
});