/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './ActivitiesData.css'

export default props => {
    return (
        <div className="activities">
            <div className='section'>
                <div className="title">Softwares autorizados</div>
                <p>Tempo: {props.tempoAuth.h}h {props.tempoAuth.min}min {props.tempoAuth.s}s</p>
                <p>Porcentagem de uso: {props.percentAuth}%</p>
            </div>
            
            <div className='section'>
                <div className="title">Softwares utilizados</div>
                <p>Tempo: {props.tempoNoAuth.h}h {props.tempoNoAuth.min}min {props.tempoNoAuth.s}s</p>
                <p>Porcentagem de uso: {props.percentNoAuth}%</p>
            </div>
            
            <div className='section'>
                <div className="title">Softwares utilizados</div>
                <p>Tempo: {props.tempoIdling.h}h {props.tempoIdling.min}min {props.tempoIdling.s}s</p>
            </div>
            
        </div>
    )
}