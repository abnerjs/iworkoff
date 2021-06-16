/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect, useCallback } from 'react'
import DiaCard from './DiaCard'
import { connect } from 'react-redux'
import './Diaria.css'
import { IoReload } from "react-icons/io5"
import { setDateSelected } from '../../store/actions/dateSelected'

function withoutTime(daySelect) {
    var dt = new Date(daySelect)
    dt.setHours(0, 0, 0, 0)
    var today = new Date()
    today.setHours(0, 0, 0, 0)

    return (dt.getTime() === today.getTime())
}

const Diaria = props => {

    var isToday = withoutTime(props.dateSelected)

    const semana = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB']
    const meses = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ']

    var rows = []
    for (let i = -3; i <= 3; i++) {
        rows.push(
            <DiaCard delta={i} active={(i === 0) ? 'active' : ''}
                dia={(new Date(new Date(props.dateSelected).getTime() + (i * 24 * 60 * 60 * 1000))).getDate()}
                mes={meses[new Date(new Date(props.dateSelected).getTime() + (1 * 24 * 60 * 60 * 1000)).getMonth()]}
                sem={semana[((new Date(props.dateSelected).getDay() + i) + 7) % 7]}
            />
        )
    }

    return (
        <div className='diaria' >
            {rows}
            <div className={`restore ${isToday ? '' : 'active'}`} onClick={() => { props.setDateSelected(new Date()) }}>
                <IoReload />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        dateSelected: state.timelineResult.dateSelected,
    }
}

const mapDispatchToProp = dispatch => {
    return {
        setDateSelected(newNumber) {
            const action = setDateSelected(newNumber)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(Diaria)