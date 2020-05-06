import {startAddExpense,addExpense,removeExpense,editExpense, setExpenses, startSetExpenses} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) =>{
    const expenseData = {};
    expenses.forEach(({id,description,note,amount,createdAt})=>{
    expenseData[id] = {description,note,amount,createdAt};
    });
    database.ref('expenses').set(expenseData).then(()=> done());
});


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
    const action = addExpense(expenses[0]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[0]        
    });
});

//we will be using redux mock store to test for database and store
test('test should add expense to database and store', (done) =>{ // so these are async test, for them to run till end, we will add done as an arguement, and this test will not end until it runs done as well
const store = createMockStore({});
const expenseData = {
    description: 'Mouse',
    amount: 1200,
    note:'This one is better',
    createdAt: 500000
}

store.dispatch(startAddExpense(expenseData)).then(() =>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String), // this means it will pass if there is any string
            ...expenseData
    
        }
    })

   return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    
}).then((snapshot) =>{

    expect(snapshot.val()).toEqual(expenseData);
    done();
});



});

test('test should add expense with default to database and store', (done) =>{
    const store = createMockStore({});
    const expenseDefaultData = {
        description: '',
        amount: 0,
        note:'',
        createdAt: 0
    };
    
    store.dispatch(startAddExpense({})).then(() =>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String), // this means it will pass if there is any string
                ...expenseDefaultData
        
            }
        });
    
       return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        
    }).then((snapshot) =>{
    
        expect(snapshot.val()).toEqual(expenseDefaultData);
        done();
    });
    
    
    
});

test('should setup set expense with data', () =>{
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});


test('should fetch expenses from firebase', (done) =>{
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});
// test('should setup addexpense with no values', () =>{
//     // const expenseData = {
//     //     description:'',
//     //     note:'',
//     //     amount:0,
//     //     createdAt:0
//     // };
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense:{
//             description:'',
//             note:'',
//             amount:0,
//             createdAt:0,
//             id: expect.any(String)
//         }
//     });
// });