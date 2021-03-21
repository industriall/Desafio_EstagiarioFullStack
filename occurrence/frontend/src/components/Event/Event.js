import React, { Component } from 'react';

import { HiPencil, HiX } from 'react-icons/hi';

import './Event.css'

class Event extends Component {

    render() {
        return (

            <div class="card">

                <div class="container">  
                    <p>{this.props.event.text}</p>
                </div>

                <div id="btns">
                    <button id="edit-event-btn" type="button" onClick={this.props.editEvent}>
                        <HiPencil id="edit-icon" size={24} color="rgb(121, 41, 153)"/>
                    </button>
                    
                    <button id="delete-event-btn" type="button" onClick={this.props.deleteEvent}>
                        <HiX id="delete-icon" size={24} color="rgb(121, 41, 153)"/>
                    </button>
                </div>

            </div> 
        )
    }

}

export default Event;