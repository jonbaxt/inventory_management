import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Inventory from './Components/Inventory/Inventory';
import Clients from './Components/Clients/Clients';
import Orders from './Components/Orders/Orders';
import Users from './Components/Users/Users';

export default function Routes() {
    return (
        <Switch>
            <Route path='/' component={Inventory} exact />
            <Route path='/clients' component={Clients} />
            <Route path='/orders' component={Orders} />
            <Route path='/users' component={Users} />
        </Switch>
    )
}