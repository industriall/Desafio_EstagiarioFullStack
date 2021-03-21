import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import OccurrenceForm from './pages/OccurrenceForm/'
import { AnimatedSwitch, AnimatedRoute } from 'react-router-transition';

import Landing from './pages/Landing/'
import Check from './pages/Check/'
import Problem from './pages/Problem/'
import Page404 from './pages/Page404/'

function Routes() {
    return (
        <BrowserRouter>
            <AnimatedSwitch>
                <Route path='/' exact component={Landing} />
                <Route path='/form' component={OccurrenceForm} />
                <Route path='/check' component={Check} />
                <Route path='/problem' component={Problem} />
                <Route component={Page404} />
            </AnimatedSwitch>
        </BrowserRouter>
    )
}

export default Routes