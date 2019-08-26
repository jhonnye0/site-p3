import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';
import Contract from './pages/Contract';
import Edit from './pages/Edit';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route 
        {...rest} 
        render={ props => 
            true ? (
                (<Component {...props} />)
            ) : (
                <Redirect to={{ pathname: '/', state: { from: props.location } }}/>
            )
        } 
    />
);

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <PrivateRoute path="/user/:userId" component={Main} />
                <Route path="/register" component={Register} />
                <Route path="/contract/:userId/:id" component={Contract} />
                <Route path="/edit/user/:userId" component={Edit} />
            </Switch> 
        </BrowserRouter>
    );
}