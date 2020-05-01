// Higher order Component (HOC), A component(HOC) renders other components
//Reuse code
// render hijacking
// prop manipulation
//abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) =>(
    <div>
    
    <h1>Info</h1>
    <p>the info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) =>{
    return (props) =>(
        <div>
       {props.isAdmin && <p>This is private info, please dont share</p>} 
        <WrappedComponent {...props }/>
        </div>
    );

};

const requireAuthentication = (WrappedComponent) =>{
    return (props) => (
        <div>
      {props.isAuthenticated ? (
       <WrappedComponent {...props}/>   
      ):(<p>You are not Authenticated</p>)}
        </div>
    )
}

const AdminInfo= withAdminWarning(Info);
const AuthInfo= requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="these are the details"/>,document.getElementById('app'));