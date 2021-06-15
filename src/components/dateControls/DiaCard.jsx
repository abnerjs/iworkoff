/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './DiaCard.css'

export default props => {
    return (
        <div className={`dia-card ${props.active ? 'active':''}`} onClick={() => props.datesAround(props.delta)}>
            <div className="sem">{props.sem}</div>
            <div className="dia">{props.dia}</div>
            <div className="mes">{props.mes}</div>
        </div>
    )
}