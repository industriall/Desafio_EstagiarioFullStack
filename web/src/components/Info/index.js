import React from 'react'
import './styles.css'

const Info = (props) => {
    return (

        <div id='infoContainer'>
            <img src={props.icon} alt={props.iconAlt} />
            <h1 id='infoText'>{props.content}</h1>
        </div>
    )
}

export default Info