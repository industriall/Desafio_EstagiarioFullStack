import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import attention from '../../assets/attention.svg'
import Info from '../../components/Info'

function Problem() {
    const history = useHistory()

    useEffect(() => {
        setTimeout(() => history.goBack(), 1500)
    }, [history])

    return (
        <Info icon={attention} iconAlt='Icone de exclamação' content='Houve um problema' />
    )
}

export default Problem