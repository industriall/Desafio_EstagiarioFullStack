import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import check from '../../assets/check.svg'
import Info from '../../components/Info'

function Check() {
    const history = useHistory()

    useEffect(() => {
        setTimeout(() => history.push('/'), 1500)
    }, [history])

    return (
        <Info icon={check} iconAlt='Icone de confirmação' content='Salvo' />
    )
}

export default Check