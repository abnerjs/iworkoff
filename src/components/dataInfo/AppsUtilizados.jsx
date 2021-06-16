import React from 'react'
import Title from '../Title'
import './AppsUtilizados.css'
import AppCollapse from './AppCollapse'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const result = props.apps.reduce(function (r, a) {
        r[a.app] = r[a.app] || []
        r[a.app].push(a)
        return r
    }, Object.create(null))

    const keys = Object.keys(result)

    return (
        <div className="apps-util">
            <Title content='Apps utilizados' />

            {
                keys.map((key, index) => {
                    return <AppCollapse app={result[key][0]} />
                })
            }
        </div>
    )
}