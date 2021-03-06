import {startAddExpense,addExpense,removeExpense,editExpense,startEditExpense, setExpenses, startSetExpenses,startRemoveExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const uid = 'thisisuid';
const defaultAuthState = {auth:{uid}}; 
const createMockStore = configureMockStore([thunk]);

beforeEach((done) =>{
    const expenseData = {};
    expenses.forEach(({id,description,note,amount,createdAt})=>{
    expenseData[id] = {description,note,amount,createdAt};
    });
    database.ref(`users/${uid}/expenses`).set(expenseData).then(()=> done());
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

test('should setup update in database', (done) =>{
    const store = createMockStore(defaultAuthState);
    const id = expenses[0].id;
    const updates = {amount: 21045};
    store.dispatch(startEditExpense(id,updates)).then(() =>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) =>{
    expect(snapshot.val().amount).toBe(updates.amount);
    done();
    })

})

test('should setup add expense with values', ()=>{
    const action = addExpense(expenses[0]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[0]        
    });
});

//we will be using redux mock store to test for database and store
test('test should add expense to database and store', (done) =>{ // so these are async test, for them to run till end, we will add done as an arguement, and this test will not end until it runs done as well
const store = createMockStore(defaultAuthState);
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

   return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    
}).then((snapshot) =>{

    expect(snapshot.val()).toEqual(expenseData);
    done();
});



});

test('test should add expense with default to database and store', (done) =>{
    const store = createMockStore(defaultAuthState);
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
    
       return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
        
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
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});

test('should remove expense',(done) =>{
    const store = createMockStore(defaultAuthState);
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense({id})).then(() =>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'REMOVE_EXPENSE',
            id
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot)=>{
    expect(snapshot.val()).toBeFalsy();
    done();
    })
})
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