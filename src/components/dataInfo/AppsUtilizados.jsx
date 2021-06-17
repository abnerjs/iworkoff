import React from 'react'
import Title from '../Title'
import './AppsUtilizados.css'
import AppCollapse from './AppCollapse'
import { connect } from 'react-redux'


const AppsUtilizados = props => {
    const result = props.data.reduce(function (r, a) {
        r[a.app] = r[a.app] || []
        r[a.app].push(a)
        return r
    }, Object.create(null))
    const keys = Object.keys(result)

    var todayApps = 0

    for (let key of keys) {
        todayApps += (result[key][0].initialTime.getDate() === props.dateSelected.getDate()) ? 1 : 0
    }

    if (todayApps > 0) {
        return (
            <div className="apps-util">
                <Title content='Apps utilizados' />
    
                {
                    keys.map((key, index) => {
                        if (result[key][0].initialTime.getDate() === props.dateSelected.getDate()) {
                            return <AppCollapse app={result[key][0]} />
                        } else 
                            return ''
                    })
                }
            </div>
        )
    } else 
        return ''
}

const mapStateToProps = state => {
    return {
        data: state.timelineResult.data,
        dateSelected: state.timelineResult.dateSelected,
    }
}

export default connect(
    mapStateToProps
)(AppsUtilizados)