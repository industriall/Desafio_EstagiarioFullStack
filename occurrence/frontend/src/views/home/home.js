import React, { Component } from 'react';

import OccForm from '../../components/OccForm/OccForm'

class Home extends Component {

    render() {
        return (
            <div id="page-landing">

                <h1>Formulário de Ocorrência</h1>

                <br />

                <OccForm />

            </div>
        )
    }
}

export default Home;