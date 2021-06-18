/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './AppCollapse.css'
import Collapsible from 'react-collapsible';
import { IoChevronDownOutline } from "react-icons/io5"

const divisorContent = (nomeApp) => {
    return (
        <div className='divisorContent'>
            {nomeApp}
            <IoChevronDownOutline className='chevronApps' />
        </div>
    )
}

function secondsToHours(sec) {
    var aux = new Date(1970, 0, 1)
    aux.setSeconds(sec)
    var textual = ''
    
    if(aux.getHours() > 0)
        textual += aux.getHours() + 'h'

    if(aux.getMinutes() > 0)
        textual += aux.getMinutes() + 'min'

    if(aux.getHours() <= 0 && aux.getMinutes() <= 0)
        textual += aux.getSeconds() + 's'

    return textual
}

export default props => {

    return (
        <div className='collapsible'>
            <Collapsible trigger={divisorContent(props.app.desSoftware != null ? props.app.desSoftware : props.app.desProcesso)} transitionTime={100} >
                <div className='app-time-info'>
                    <div className="timed">
                        {secondsToHours(props.app.tempoUsoSegundos)}
                    </div>
                    <div className={`
                        isAuth
                        ${props.app.flgAutorizado === 'S' ? 'auth' : 'noAuth'}
                    `}>
                        {props.app.flgAutorizado === 'S' ? 'Autorizado' : 'Não Autorizado'}
                    </div>
                </div>
            </Collapsible>
        </div>
    )
}