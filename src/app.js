import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {startSetExpenses} from './actions/expenses';
import {login,logout} from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import AppRouter,{history} from './routers/AppRouter';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
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

let hasRendered = false;
const renderApp = () =>{
 if(!hasRendered){
    ReactDOM.render(jsx,document.getElementById('app'));
    hasRendered = true;
 }
};



ReactDOM.render(<LoadingPage/>,document.getElementById('app'));



firebase.auth().onAuthStateChanged((user) => {
    if(user){
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() =>{
        renderApp();
        if(history.location.pathname === '/'){
            history.push('/dashboard');
        }
        
        });
    }else {
        store.dispatch(logout());
        renderApp();
    history.push('/');
    }
})

