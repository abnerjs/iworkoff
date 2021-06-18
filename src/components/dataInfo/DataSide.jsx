/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './DataSide.css'
import Title from '../Title'
import { connect } from 'react-redux'

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

function stringToDate(dt) {
    dt = dt.substring(0, 19)
    const tmpaux = dt.split(/[- :]/)
    return new Date(tmpaux[0], tmpaux[1] - 1, tmpaux[2], tmpaux[3], tmpaux[4], tmpaux[5])
}

function dateDisplay(dt) {
    return dt.getHours() + 'h' + dt.getMinutes() + 'min'
}

const DataSide = props => {
    return (
        <div className="dataside">
            <Title content='Dados' />
            <p>Hora de início: {dateDisplay(stringToDate(props.dtaHoraInicio))}</p>
            <p>Hora de final: {dateDisplay(stringToDate(props.dtaHoraFim))}</p>
            <br />
            <p>Tempo total: {secondsToHours(props.tempoRegistradoSegundos)}</p>
            <p>Tempo ativo: {secondsToHours(props.totalAtiv)}</p>
            <p>Tempo inativo: {secondsToHours(props.totalIdling)}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        totalAtiv: state.timelineResult.totalAtiv,
        totalIdling: state.timelineResult.totalIdling,
        tempoRegistradoSegundos: state.timelineResult.tempoRegistradoSegundos,
        dtaHoraInicio: state.timelineResult.dtaHoraInicio,
        dtaHoraFim: state.timelineResult.dtaHoraFim,
    }
}

export default connect(
    mapStateToProps
) (DataSide)