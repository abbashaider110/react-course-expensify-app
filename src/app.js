import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import AppRouter from './routers/AppRouter';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
const store = configureStore();
//import './playGround/promises';

// store.dispatch(addExpense({description: 'water bill',amount:4500,createdAt:500}));
// store.dispatch(addExpense({description: 'gas bill', amount:600,createdAt:1000}));
// store.dispatch(addExpense({description: 'rent',amount:500,createdAt:2000}));


// // store.dispatch(setTextFilter('water'));

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
// console.log(visibleExpenses);

// setTimeout(()=>{
//     store.dispatch(setTextFilter('bill'));
// },3000);

// console.log(store.getState()) ;
//provider takes a props which is your store
const jsx = (
    <Provider store = {store}> 
    <AppRouter/>
    </Provider>
    
);

ReactDOM.render(jsx,document.getElementById('app'));

