import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Inventory from './Components/Inventory/Inventory';

export default function Routes() {
    return (
        <Switch>
            <Route path='/' component={Inventory} exact />

        </Switch>
    )
}