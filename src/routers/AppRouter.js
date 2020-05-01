import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom'
import React from 'react';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import Home from '../components/Home';
import AddExpensePage from '../components/AddExpensePage';
import Contact from '../components/Contact';
import EditExpensePage from '../components/EditExpensePage';
const AppRouter = () =>(
// this Header is a react child and not html
<BrowserRouter>
<div>
<Header/>
<Switch>
<Route path="/" component = {Home} exact= {true}/>
<Route path="/contact" component = {Contact}/>
<Route path="/create" component={AddExpensePage} exact={true}/>
<Route path="/edit/:id" component={EditExpensePage}/>
<Route  component={NotFoundPage}/>
</Switch>    
</div>
</BrowserRouter>
);
     

export default AppRouter;
    