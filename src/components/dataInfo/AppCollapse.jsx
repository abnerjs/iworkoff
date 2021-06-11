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
                <div className="timed">

                </div>
                <div className="auth">
                    
                </div>
            </Collapsible>
        </div>
    )
}