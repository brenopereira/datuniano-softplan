import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Country from '../pages/country';
import Home from '../pages/home';
import Error404 from '../pages/404';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact={true} component={Home} />
                <Route
                    path='/country/:country'
                    exact={true}
                    component={Country}
                />
                <Route path='/**' exact={true} component={Error404} />
            </Switch>
        </Router>
    );
}
