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
        <Collapsible trigger={divisorContent(props.app.app)} className='collapsible'>
          <p>
            This is the collapsible content. It can be any element or React
            component you like.
          </p>
          <p>
            It can even be another Collapsible component. Check out the next
            section!
          </p>
        </Collapsible>
      )
}