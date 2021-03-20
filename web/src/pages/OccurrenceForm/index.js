import React, { useState } from 'react'
import api from '../../services/api'
import { Check, Plus } from 'react-feather'
import './styles.css'

function OccurrenceForm() {
    const [formData, setFormData] = useState({
        title: '',
        start: '',
        end: '',
        occurrences: ['Essa foi uma situação que ocorreu.', 'Essa foi outra coisa que ocorreu nesse meio tempo. Mas será que deu pra lidar com isso? Será que foi suficiente?', 'E isso?']
    })

    function handleInputChange(event) {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    async function handleSubmit(event) {
        event.preventDefault()

        api.post('occur', formData).then((response) => {
            alert(response.data.id)
        }).catch(error => {
            alert(error.response.data.errorMessages)
        })
    }

    return (
        <div id='occurrencesForm' className='mainContainer'>
            <h1 id='title'>Formulário de Ocorrências</h1>
            <p id='info'>Descreva abaixo os detalhes da ocorrencia</p>

            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className='field'>
                        <label htmlFor='title'>Título</label>
                        <input required onChange={handleInputChange} maxLength='45' type='text' name='title' id='title' />
                    </div>
                    <div className='dateField'>
                        <div className='field'>
                            <label htmlFor='start'>Início</label>
                            <input required onChange={handleInputChange} type='date' name='start' id='start' />
                        </div>
                        <div className='field'>
                            <label htmlFor='start'>Final</label>
                            <input required onChange={handleInputChange} type='date' name='end' id='end' />
                        </div>
                    </div>

                    <div className='field'>
                        <label htmlFor='addOccurrence'>Adicionar Acontecimento</label>
                        <textarea onChange={handleInputChange} rows='4' name='addOccurrence' id='addOccurrence' />
                    </div>
                </fieldset>

                <button className='secondary' type='button'><Plus color="var(--color-dark-gray)" size={35} /><legend>Adicionar</legend></button>

                <div className='occurrenceListHeader'>
                    <label htmlFor='occurrences' >Acontecimentos</label>
                    <a href='/' className='textButton'>Remover todos</a>
                </div>
                <div className='occurrenceList'>
                    {formData.occurrences.map((occurrence, index) => {
                        return (
                            <div className='occurence-item' >
                                {occurrence}
                            </div>
                        )
                    })}
                </div>

                <button className='primary' type='submit'><Check color="var(--color-background)" size={35} /><legend>Salvar</legend></button>
            </form>
            <footer />
        </div>

    )
}

export default OccurrenceForm