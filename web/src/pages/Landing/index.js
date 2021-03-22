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
                <div className='buttonContainer'> <Link to='/form' className='startButton'><ChevronsRight color="var(--color-background)" size={40} />Começar</Link></div>

            </div>
            <div className='squareSquad'>
                <Square background='var(--color-background)' left='1500px' top='0px' />
                <Square background='var(--color-highlight)' left='1516px' top='4px' transform='rotate(240deg)' />
                <Square background='var(--color-background)' left='1565px' top='14px' />
                <Square background='var(--color-highlight)' left='1581px' top='18px' transform='rotate(330deg)' />
                <Square background='var(--color-background)' left='1630px' top='29px' />
            </div>
        </div>
    )
}

export default Landing