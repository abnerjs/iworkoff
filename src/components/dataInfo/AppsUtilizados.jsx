import React from 'react'
import Title from '../Title'
import './AppsUtilizados.css'
import AppCollapse from './AppCollapse'
import { connect } from 'react-redux'

const AppsUtilizados = props => {

    const result = props.data ? props.data.reduce(function (r, a) {
        r[a.app] = r[a.app] || []
        r[a.app].push(a)
        return r
    }, Object.create(null)) : {}


    const keys = result ? Object.keys(result) : {}

    if (props.data) {
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
    } else
        return ''
}

const mapStateToProps = state => {
    return {
        data: state.timelineResult.dataBrief,
    }
}

export default connect(
    mapStateToProps
)(AppsUtilizados)