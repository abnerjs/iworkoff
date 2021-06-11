/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './AppCollapse.css'
import Collapsible from 'react-collapsible';

const divisorContent = (nomeApp) => {
    return (
        <div className='divisorContent'>
            {nomeApp}
        </div>
    )
}

export default props => {

    return (
        <div className='collapsible'>
            <Collapsible trigger={divisorContent(props.app.app)}>
                <div app-time-info>
                    <div className="timed">
                        {props.app.finalTime - props.app.initialTime}
                    </div>
                    <div className={props.app.isAuth ? 'auth' : 'noAuth'}>
                        {props.app.isAuth ? 'Autorizado' : 'Não Autorizado'}
                    </div>
                </div>
            </Collapsible>
        </div>
    )
}