import React, { Component } from 'react';
import { HiPlus } from 'react-icons/hi';
import { BsCheck } from 'react-icons/bs';
import shortid from 'shortid';

import EventList from '../EventList/EventList';
import Result from '../Result/Result';
import DateInput from '../DateInput/DateInput'

import './OccForm.css'

import 'react-datepicker/dist/react-datepicker.css'

class OccForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            occurrence: {
                title: "",
                start: "",
                end: "",
                events: []
            },
            acontecimento: "",

            success: '',
            id: "",
            errorMessages: []
        }
    }

    handleSubmit = event => {

        // retira o id dos acontecimentos
        const array = this.state.occurrence.events.map(event => (event.text));

        const requestOptions = {
            method: "post",
            body: JSON.stringify({
                title: this.state.occurrence.title,
                start: this.state.occurrence.start,
                end: this.state.occurrence.end,
                events: array
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }
        
        fetch(`http://localhost:3333/occurrences`, requestOptions)
        .then(response => response.json())
        .then(data => {
            if(data.sucesso === true) {
                this.setState({
                    success: true,
                    id: data.id
                })
            } else {
                this.setState({
                    success: false,
                    errorMessages: data.errorMessages
                })
            }
        })

        this.setState({
            success: ''
        })

        event.preventDefault(); // evitar que abra uma nova pagina
    }

    handleInputChange = event => {

        const { name, value } = event.target

        this.setState(prevState => ({
            occurrence: {...prevState.occurrence, [name]: value}
        }))
    }

    handleEventChange = event => {

        const { name, value } = event.target

        this.setState(prevState => ({
            acontecimento: {...prevState.acontecimento, [name]: value}
        }))
    }

    handleAddEvent = () => {

        if((this.state.acontecimento.event !== undefined) && (this.state.acontecimento.event !== "")) {
            
            this.state.occurrence.events.push(
                {
                    id: shortid.generate(),
                    text: this.state.acontecimento.event
                }
            );
        }

        // faz a lista se atualizar ao causar change no estado acontecimento
        this.setState({
            acontecimento: this.state.acontecimento
        })
    }

    handleDeleteEvent = id => {

        this.setState(prevState => ({
            occurrence: {
                ...prevState.occurrence, 
                events: prevState.occurrence.events.filter(event => event.id !== id)
            }
        }))
    }

    handleEditEvent = id => {

        this.setState(prevState => ({
            occurrence: {
                ...prevState.occurrence, 
                events: prevState.occurrence.events.map(
                    el => el.id === id? { ...el, text: 'Editado' }: el
                )
            }
        }))
    }

    getDate = (date, legend) => {

        if(date !== null) {

            if(legend === 'start')
                this.setState(prevState => ({
                    occurrence: {
                        ...prevState.occurrence, 
                        start: date
                    }
                }))
            else
                this.setState(prevState => ({
                    occurrence: {
                        ...prevState.occurrence, 
                        end: date
                    }
                }))
        }
    }

    render() {
        return(

            <form onSubmit = {this.handleSubmit}>

                <div id="first-row">

                    <fieldset>
                        <legend>Título</legend>
                        <input
                            placeholder="Digite o título da ocorrência"
                            type="text"
                            id="title"
                            name="title"
                            required
                            value={this.state.occurrence.title}
                            onChange={this.handleInputChange}
                            />
                    </fieldset>

                    <fieldset>
                        <legend>Início</legend>
                        <DateInput legend="start" dateCallback={this.getDate}/>

                    </fieldset>

                    <fieldset>
                        <legend>Final</legend>
                        <DateInput legend="end" dateCallback={this.getDate}/>

                    </fieldset>

                </div> {/* end of first row */}

                <br />
                <h2>Acontecimentos</h2>

                <div id="second-row">

                    <fieldset>
                        <legend>Acontecimento</legend>
                        <input
                            placeholder="Informe aqui o ocorrido"
                            type="text"
                            id="event"
                            name="event"
                            value={this.state.acontecimento.value}
                            onChange={this.handleEventChange}
                            />
                    </fieldset>

                    <button id="add-btn" type="button" onClick={this.handleAddEvent}>
                        <div id="add-icone">
                            <HiPlus size={24} color="white"/>
                        </div>
                        ADICIONAR
                    </button>

                </div> {/* end of second row */}

                
                <EventList 
                    events={this.state.occurrence.events}
                    editEventCallback={this.handleEditEvent}
                    delEventCallback={this.handleDeleteEvent}
                    />

                <br />
                <button id="submit-btn" type="submit">
                    <BsCheck id="check-icon" size={24} color="white"/>
                    SALVAR
                </button>


                <br />
                <Result
                    success={this.state.success}
                    id={this.state.id}
                    errorMessages={this.state.errorMessages}
                    />
                
                

            </form>
        )
    }
}

export default OccForm;