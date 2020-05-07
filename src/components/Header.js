import React from 'react';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom'
import {startLogOut} from '../actions/auth';
import { connect } from 'react-redux';
    
export const Header = (props) =>(
    <header>
    <h1>Expensify</h1>
    <NavLink to="/dashboard" activeClassName= "is-active" >Dashboard</NavLink>
    <NavLink to="/create" activeClassName= "is-active">Create</NavLink>
    <button onClick={props.startLogOut}>Log Out</button>
    </header>
    );

    const mapDispatchToProps = (dispatch) =>({
        startLogOut: () => dispatch(startLogOut())
    })
    
    

export default connect(undefined,mapDispatchToProps)(Header);