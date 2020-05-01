import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';


const Home = () =>(
    <div>
    <ExpenseListFilters/>
    <ExpenseList/>

    </div>
    );

export default Home;