import React from 'react'
import Title from '../Title'
import './AppsUtilizados.css'
import AppCollapse from './AppCollapse'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div className="apps-util">
            <Title content='Apps utilizados' />

            <AppCollapse app={props.apps[0]} />
            <AppCollapse app={props.apps[0]} />
            <AppCollapse app={props.apps[0]} />
        </div>
    )
}