import React, { useState } from 'react'
import { AlertCircle, Check, Edit2, Plus, Trash2 } from 'react-feather'
import { useHistory } from 'react-router-dom'

//import attention from '../../assets/attention.svg'
import attention from '../../assets/attention.json'
//import check from '../../assets/check.svg'
import check from '../../assets/check.json'

import Info from '../../components/Info'
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
    const [errorInfo, setErrorInfo] = useState(undefined)
    const [requestID, setRequestID] = useState('')

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    const handleNewOccurrence = (event) => {
        const { value } = event.target
        setNewOccurrence(value)
    }

    const addNewOccurrence = () => {
        if (newOccurrence.length === 0) {
            alert('Escreva algum acontecimento antes de adicioná-lo.')
            return
        }
        const addedOccurrence = [...formData.occurrences, newOccurrence]
        setNewOccurrence('')
        setFormData({ ...formData, occurrences: addedOccurrence })
    }

    const handleRemoveAll = () => {
        const newArray = []
        setFormData({ ...formData, occurrences: newArray })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        //Formate dates from YYYY-MM-DD to DD/MM/YYYY
        const formatedStartDate = formData.start.split('-').reverse().join('/')
        const formatedEndDate = formData.end.split('-').reverse().join('/')
        const formatedData = { ...formData, start: formatedStartDate, end: formatedEndDate }

        api.post('occur', formatedData).then((response) => {
            setErrorInfo(false)
            setRequestID(response.data.id)
            setTimeout(() => {
                setErrorInfo(undefined)
                history.push('/')
            }, 5000)

        }).catch(error => {
            //In case backend connection doesn't even exist
            if (error.response) {
                setErrors(error.response.data.errorMessages)
            }
            setErrorInfo(true)
            setTimeout(() => setErrorInfo(undefined), 2000)
        })
    }

    const handleEdit = (index) => {
        if (newOccurrence.length !== 0) {
            //Don't override stuff written
            return
        }
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
        <>
            <div className='infoScreen' style={errorInfo === true ? { bottom: 0 + 'px' } : { bottom: 100 + 'vh' }}>
                <Info animData={attention} play={errorInfo === true} iconAlt='Icone de exclamação' content='Houve um problema' />
            </div>
            <div className='infoScreen' style={errorInfo === false ? { bottom: 0 + 'px' } : { bottom: 100 + 'vh' }}>
                <Info animData={check} play={errorInfo === false} iconAlt='Icone de confirmação' content='Salvo' id={requestID} />
            </div>
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
        </>
    )
}

export default OccurrenceForm