import React from 'react'
import Title from '../Title'
import './AppsUtilizados.css'
import AppCollapse from './AppCollapse'
import { connect } from 'react-redux'

function removeDuplicates(array) {
    var arr = []

    for(let elem of array) {
        var flag = false
        for(let elemaux of arr) {
            if(elemaux.desProcesso === elem.desProcesso)
                flag = true
        }
        if(!flag)
            arr.push(elem)
    }
    
    return arr
}

const AppsUtilizados = props => {

    if (props.data && props.typeOfAnalytics === 'Diário') {
        return (
            <div className="apps-util-container">
                <Title content='Apps utilizados' />
                <div className="apps-util">
                    <div className="apps-util-content">{
                        props.data.map((key, index) => {
                            return <AppCollapse app={key} />
                        })
                    }</div>
                </div>
            </div>
        )
    } else if (props.dataWeek.length > 0 && props.typeOfAnalytics === 'Semanal') {
        var arr = []
        for (let dataDay of props.dataWeek) {
            arr.push(...new Set([...dataDay.resumoAtividades.lstDetalhes]))
        }
        arr = removeDuplicates(arr)

        return (
            <div className="apps-util-container">
                <Title content='Apps utilizados' />
                <div className="apps-util">
                    <div className="apps-util-content">
                        {arr.map((key, index) => {
                            return <AppCollapse app={key} />
                        })}
                    </div>
                </div>
            </div>
        )
    } else
        return ''
}

const mapStateToProps = state => {
    return {
        data: state.timelineResult.dataBrief,
        typeOfAnalytics: state.timelineResult.typeOfAnalytics,
        dataWeek: state.timelineResult.dataWeek,
    }
}

export default connect(
    mapStateToProps
)(AppsUtilizados)