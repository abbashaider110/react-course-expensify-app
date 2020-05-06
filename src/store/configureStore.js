import {createStore, combineReducers,applyMiddleware,comopose} from 'redux'; // combine reducers is used when we are using more than one reducers, read about applyMiddleware
import  expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';  // thunk lets store disptach function

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () =>{
// Store Creation

const store = createStore(
    combineReducers({ // combine reducers takes an arguement as an object and it combines multiple reducers
        expenses: expensesReducer,
        filters: filtersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );  
    return store;
}

