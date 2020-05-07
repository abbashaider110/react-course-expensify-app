import {Router,Route,Switch,Link,NavLink} from 'react-router-dom'
import React from 'react';
import NotFoundPage from '../components/NotFoundPage';
import Home from '../components/Home';
import AddExpensePage from '../components/AddExpensePage';
import Contact from '../components/Contact';
import EditExpensePage from '../components/EditExpensePage';
import LoginPage from '../components/LoginPage';
import {createBrowserHistory} from 'history';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

//yarn add history@latest
export const history = createBrowserHistory();
const AppRouter = () =>(
// this Header is a react child and not html
<Router history = {history}>
<div>
<Switch>
<PublicRoute path= "/" component = {LoginPage} exact = {true}/>
<PrivateRoute path="/dashboard" component = {Home} />
<PrivateRoute path="/create" component={AddExpensePage} />
<PrivateRoute path="/edit/:id" component={EditExpensePage}/>
<Route  component={NotFoundPage}/>
</Switch>    
</div>
</Router>
);
     

export default AppRouter;
    