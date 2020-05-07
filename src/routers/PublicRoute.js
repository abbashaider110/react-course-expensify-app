import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import Header from '../components/Header';

export const PublicRoute = ({
    isAuthenticated,
    component:Component,
    ...rest //means rest properties/props
}) => (
<Route {...rest} component={(props) =>(
    isAuthenticated ? (
        
        <Redirect to = "/dashboard"/>
        
    ) : (
        <Component {...props}/>
    )
)} />
 );

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid //we used !! so that we can get actual boolean true or false, otherwise in start we would get undefined
})

export default connect(mapStateToProps)(PublicRoute);