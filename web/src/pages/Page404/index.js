import React from 'react'
import attention from '../../assets/attention.svg'
import Info from '../../components/Info'

function Page404() {

    return (
        <Info icon={attention} iconAlt='Icone de atenção' content='404 Essa pagina não existe.' />
    )
}

export default Page404