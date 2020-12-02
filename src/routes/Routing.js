import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { LoginView } from '../views/LoginView';
import { MainView } from '../views/MainView';

export const Routing = (props) => {
    return (
        <Router>
            {props.children}
            <Switch>
                <Route exact path="/login" component={LoginView} />
                <Route component={MainView} />
            </Switch>
        </Router>
    )
}