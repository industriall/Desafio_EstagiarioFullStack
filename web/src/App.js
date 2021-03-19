import React, { useState } from 'react'
import api from './services/api'

function App() {
  const [formData, setFormData] = useState({
    title: '',
    start: '',
    end: '',
    occurrences: ['My Occur']
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
    <div>

      <form onSubmit={handleSubmit}>
        <h1>Formulário de Ocorrência</h1>
        <fieldset>
          <div className="field">
            <label htmlFor="title">Título</label>
            <input onChange={handleInputChange} type="text" name="title" id="title" />
          </div>
          <div className="field">
            <label htmlFor="start">Início</label>
            <input onChange={handleInputChange} type="text" name="start" id="start" />
          </div>
          <div className="field">
            <label htmlFor="start">Fim</label>
            <input onChange={handleInputChange} type="text" name="end" id="end" />
          </div>

        </fieldset>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default App
