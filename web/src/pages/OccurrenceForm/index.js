import React, { useState } from 'react'
import api from '../../services/api'
import { Check, Edit2, Plus, Trash2 } from 'react-feather'
import './styles.css'

function OccurrenceForm() {
    const [formData, setFormData] = useState({
        title: '',
        start: '',
        end: '',
        occurrences: []
    })
    const [newOccurrence, setNewOccurrence] = useState('')

    function handleInputChange(event) {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    function handleNewOccurrence(event) {
        const { value } = event.target
        setNewOccurrence(value)
    }

    function addNewOccurrence() {
        if (newOccurrence.length === 0) {
            alert('Escreva algum acontecimento antes de adicioná-lo.')
            return
        }
        const addedOccurrence = [...formData.occurrences, newOccurrence]
        setFormData({ ...formData, occurrences: addedOccurrence })
    }

    function handleRemoveAll() {
        const newArray = []
        setFormData({ ...formData, occurrences: newArray })
    }

    async function handleSubmit(event) {
        event.preventDefault()

        api.post('occur', formData).then((response) => {
            alert(response.data.id)
        }).catch(error => {
            alert(error.response.data.errorMessages)
        })
    }

    function wellHandleIt(event) {
        console.log(event)
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
                        <textarea onChange={handleNewOccurrence} rows='4' name='addOccurrence' id='addOccurrence' />
                    </div>
                </fieldset>

                <button className='secondary' type='button' onClick={addNewOccurrence}><Plus color="var(--color-dark-gray)" size={35} /><legend>Adicionar</legend></button>

                <div className='occurrenceListHeader'>
                    <label htmlFor='occurrences' >Acontecimentos</label>
                    <button type='button' onClick={handleRemoveAll} className='textButton'><legend>Remover todos</legend></button>
                </div>
                <div className='occurrenceList'>
                    {formData.occurrences.length ? formData.occurrences.map((occurrence, index) => {
                        return (
                            <div key={formData.occurrences.index} className='occurence-item'>
                                {occurrence}
                                <div id='iconCollection'>
                                    <Edit2 size={30} onClick={wellHandleIt(index)} />
                                    <Trash2 size={30} />
                                </div>

                            </div>
                        )
                    }) : 'Ainda não há acontecimentos. Adicione algum no campo acima.'}
                </div>

                <button className='primary' type='submit'><Check color="var(--color-background)" size={35} /><legend>Salvar</legend></button>
            </form>
            <footer />
        </div >

    )
}

export default OccurrenceForm