import React from 'react'
import './styles.css'
import { ChevronsRight } from 'react-feather'
import { Link } from 'react-router-dom'
import Square from '../../components/Square'

function Landing() {

    return (
        <div id='landingContainer'>
            <div id='landingContent'>
                <h1 id='landingTitle'>Cadastro de Ocorrências</h1>
                <span />
                <Link to='/form' className='formLink'><ChevronsRight color="var(--color-background)" size={40} />Começar</Link>
            </div>
            <Square background='var(--color-background)' right='-300px' top='0px' />
            <Square background='var(--color-highlight)' right='-317px' top='3px' transform='rotate(240deg)' />
            <Square background='var(--color-background)' right='-370px' top='18px' />
            <Square background='var(--color-highlight)' right='-390px' top='21px' transform='rotate(330deg)' />
            <Square background='var(--color-background)' right='-446px' top='31px' />
        </div>
    )
}

export default Landing