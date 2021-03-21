import React, { useState } from 'react'
import { AlertCircle, Check, Edit2, Plus, Trash2 } from 'react-feather'
import { useHistory } from 'react-router-dom'

import api from '../../services/api'
import './styles.css'

function OccurrenceForm() {
    const history = useHistory()
    const [formData, setFormData] = useState({
        title: '',
        start: '',
        end: '',
        occurrences: []
    })
    const [newOccurrence, setNewOccurrence] = useState('')
    const [errors, setErrors] = useState([])
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
        setNewOccurrence('')
        setFormData({ ...formData, occurrences: addedOccurrence })
    }

    function handleRemoveAll() {
        const newArray = []
        setFormData({ ...formData, occurrences: newArray })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        //Formate dates from YYYY-MM-DD to DD/MM/YYYY
        const formatedStartDate = formData.start.split('-').reverse().join('/')
        const formatedEndDate = formData.end.split('-').reverse().join('/')
        const formatedData = { ...formData, start: formatedStartDate, end: formatedEndDate }

        api.post('occur', formatedData).then((response) => {
            setErrors([])
            alert(response.data.id)
            history.push('/check')
        }).catch(error => {
            //In case backend connection doesn't even exist
            if (error.response) {
                setErrors(error.response.data.errorMessages)
            }
            history.push('/problem')
        })
    }

    const handleEdit = (index) => {
        //Move content to textarea
        setNewOccurrence(formData.occurrences[index])
        //It will be added again, so we can delete it
        handleRemove(index)
    }

    const handleRemove = (index) => {
        const updatedOccurrences = [...formData.occurrences]
        updatedOccurrences.splice(index, 1)
        setFormData({ ...formData, occurrences: updatedOccurrences })
    }

    return (
        <div id='occurrencesForm' className='mainContainer'>
            <h1 id='title'>Formulário de Ocorrências</h1>
            <p id='info'>Descreva abaixo os detalhes da ocorrência.</p>

            {errors.length !== 0 &&
                <div id='errors'>
                    <div id='errorHeader'>
                        <AlertCircle size={35} /><h4>Houve um problema. Corrija os campos:</h4>
                    </div>
                    <ul>
                        {errors.map((error, index) => {
                            return (
                                <li key={index} className='errorItem'>
                                    {error}
                                </li>
                            )
                        })}
                    </ul>
                </div>}
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
                        <textarea value={newOccurrence} onChange={handleNewOccurrence} rows='4' name='addOccurrence' id='addOccurrence' />
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
                            <div key={index} className='occurrenceItem'>
                                {occurrence}
                                <div id='iconCollection'>
                                    <Edit2 size={30} onClick={() => handleEdit(index)} />
                                    <Trash2 size={30} onClick={() => handleRemove(index)} />
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