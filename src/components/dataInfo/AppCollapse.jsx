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

export default props => {

    return (
        <div className='collapsible'>
            <Collapsible trigger={divisorContent(props.app.app)} transitionTime={100} >
                <div className='app-time-info'>
                    <div className="timed">
                        {props.app.diff}
                    </div>
                    <div className={`
                        isAuth
                        ${props.app.isAuth ? 'auth' : 'noAuth'}
                    `}>
                        {props.app.isAuth ? 'Autorizado' : 'Não Autorizado'}
                    </div>
                </div>
            </Collapsible>
        </div>
    )
}