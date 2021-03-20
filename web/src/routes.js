import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import OccurrenceForm from './pages/OccurrenceForm/'
import Landing from './pages/Landing/'

function Routes() {
    return (
        <BrowserRouter>
            <Route path='/' exact component={Landing} />
            <Route path='/form' component={OccurrenceForm} />
        </BrowserRouter>
    )
}

export default Routes