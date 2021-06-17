/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './DataSide.css'
import Title from '../Title'
import { connect } from 'react-redux'

const DataSide = props => {
    return (
        <div className="dataside">
            <Title content='Dados' />
            <p>Hora de início de trabalho: {props.inicio.h}h{props.inicio.min}min</p>
            <p>Hora de final de trabalho: {props.final.h}h{props.final.min}min</p>
            <p>Tempo total: {props.total.h} hora{props.total.h > 1 ? 's' : ''} e&nbsp;
                {props.total.min} minuto{props.total.min > 1 ? 's' : ''}</p>
            <br />
            <p>Tempo ativo: {props.ativo.h}h{props.ativo.min}min</p>
            <p>Tempo inativo: {props.inativo.h}h{props.inativo.min}min</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.timelineResult.data,
        dateSelected: state.timelineResult.dateSelected,
    }
}

export default connect(
    mapStateToProps
)(DataSide)