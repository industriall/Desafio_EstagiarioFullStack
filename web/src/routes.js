import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import OccurrenceForm from './pages/OccurrenceForm/'

import Landing from './pages/Landing/'
import Check from './pages/Check/'
import Problem from './pages/Problem/'
import Page404 from './pages/Page404/'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Landing} />
                <Route path='/form' component={OccurrenceForm} />
                <Route path='/check' component={Check} />
                <Route path='/problem' component={Problem} />
                <Route component={Page404} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes