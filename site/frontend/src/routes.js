import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';
// import { isAuthenticated } from './Auth'

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route 
//         {...rest} 
//         render={props => 
//             isAuthenticated() ? (
//                 (<Component {...props} />)
//             ) : (
//                 <Redirect to={{pathname: '/', state: {from: props.location} }}/>
//             )
//         } 
//     />
// );

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/main" component={Main} />
                <Route path="/register" component={Register} />
            </Switch> 
        </BrowserRouter>
    );
}