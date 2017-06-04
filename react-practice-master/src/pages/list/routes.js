import React from 'react';
import { Route } from 'react-router';
import ListPage from './list';

export default (
    <Route>
        <Route component={ ListPage } path={ ListPage.path } />
    </Route>
);
