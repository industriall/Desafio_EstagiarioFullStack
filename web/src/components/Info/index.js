import React from 'react'
import './styles.css'
import Lottie from 'react-lottie';

const Info = (props) => {
    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: props.animData
    }

    return (

        <div id='infoContainer'>
            <div>
                <Lottie options={defaultOptions}
                    height={200}
                    width={200}
                    isStopped={!props.play}
                />

                <h1 id='infoText'>{props.content}</h1></div>
            {props.id && <p>O ID da ocorrência é <strong>{props.id}</strong></p>}
        </div>
    )
}

export default Info