import React from 'react'
import './styles.css'

const Square = (props) => {
    return (
        <div className='square' style={{ background: props.background, left: props.left, transform: props.transform, top: props.top }}></div>
    )
}

export default Square