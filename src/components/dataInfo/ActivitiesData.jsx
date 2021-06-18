import React from 'react'
import { connect } from 'react-redux'
import './ActivitiesData.css'

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

const ActivitiesData = props => {
    if(props.totalAuth) {
        return (
            <div className="activities">
                <div className='section'>
                    <div className="title">Softwares autorizados</div>
                    <p>Tempo: {secondsToHours(props.totalAuth)}</p>
                    <p>Porcentagem de uso: {props.percentAuth.toFixed(2)}%</p>
                </div>
                
                <div className='section'>
                    <div className="title">Softwares não autorizados</div>
                    <p>Tempo: {secondsToHours(props.totalNoAuth)}</p>
                    <p>Porcentagem de uso: {props.percentNoAuth.toFixed(2)}%</p>
                </div>
                
                <div className='section'>
                    <div className="title">Inatividade</div>
                    <p>Tempo: {secondsToHours(props.totalIdling)}</p>
                </div>
                
            </div>
        )
    } else 
        return ''
}

const mapStateToProps = state => {
    return {
        totalAuth: state.timelineResult.totalAuth,
        totalNoAuth: state.timelineResult.totalNoAuth,
        percentAuth: state.timelineResult.percentAuth,
        percentNoAuth: state.timelineResult.percentNoAuth,
        totalIdling: state.timelineResult.totalIdling,
    }
}

export default connect(
    mapStateToProps
) (ActivitiesData)