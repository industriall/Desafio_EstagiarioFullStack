import React from 'react'
import './styles.css'

const Info = (props) => {
    return (

        <div id='infoContainer'>
            <div><img src={props.icon} alt={props.iconAlt} />
                <h1 id='infoText'>{props.content}</h1></div>
            {props.id && <p>O ID da ocorrência é <strong>{props.id}</strong></p>}
        </div>
    )
}

export default Info