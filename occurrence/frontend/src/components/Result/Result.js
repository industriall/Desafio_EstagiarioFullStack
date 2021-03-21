import React, { Component } from 'react';

class Result extends Component {

    render() {

        if(this.props.success === true)
            return(
                <div>
                    <p>
                        Ocorrência cadastrada com id {this.props.id}
                    </p>
                </div>
            )
        else {
            if(this.props.success === false)
                return(
                    <div id="error-list">
                        <p>Erro:</p>
                        {this.props.errorMessages.map((event, index) => (
                            <ul key={index}>
                                <p>{event}</p>
                            </ul>
                        ))}
                    </div>
                )
            else
                return(
                    <div></div>
                )
        }
    }
}

export default Result