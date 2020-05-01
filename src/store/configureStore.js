import {createStore, combineReducers} from 'redux'; // combine reducers is used when we are using more than one reducers
import  expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () =>{
// Store Creation

const store = createStore(
    combineReducers({ // combine reducers takes an arguement as an object and it combines multiple reducers
        expenses: expensesReducer,
        filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );  
    return store;
}

