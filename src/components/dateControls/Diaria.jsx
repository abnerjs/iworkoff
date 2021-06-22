/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import DiaCard from './DiaCard'
import { connect } from 'react-redux'
import './Diaria.css'
import { IoReload, IoChevronBack, IoChevronForward } from "react-icons/io5"
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
        if(props.typeOfAnalytics === 'Diário') {
            rows.push(
                <DiaCard delta={i} active={(i === 0) ? 'active' : ''}
                    dia={(new Date(new Date(props.dateSelected).getTime() + (i * 24 * 60 * 60 * 1000))).getDate()}
                    mes={meses[new Date(new Date(props.dateSelected).getTime() + (1 * 24 * 60 * 60 * 1000)).getMonth()]}
                    sem={semana[((new Date(props.dateSelected).getDay() + i) + 7) % 7]}
                />
            )
        } else if (props.typeOfAnalytics === 'Semanal') {
            rows.push(
                <DiaCard delta={i} active={''}
                    dia={(new Date(new Date(props.weekTime.tuesday).getTime() + (i * 24 * 60 * 60 * 1000))).getDate()}
                    mes={meses[new Date(new Date(props.weekTime.tuesday).getTime() + (1 * 24 * 60 * 60 * 1000)).getMonth()]}
                    sem={semana[((new Date(props.weekTime.tuesday).getDay() + i) + 7) % 7]}
                />
            )
        }

        
    }

    return (
        <div className='diaria' >
            <div className="chevron-control left" onClick={() => {
                props.setDateSelected(new Date(props.dateSelected.getTime() + (-7 * 24 * 60 * 60 * 1000)))
            }}>
                <IoChevronBack />
            </div>
            {rows}
            <div className="chevron-control" onClick={() => {
                props.setDateSelected(new Date(props.dateSelected.getTime() + (7 * 24 * 60 * 60 * 1000)))
            }}>
                <IoChevronForward />
            </div>
            <div className={`restore ${isToday ? '' : 'active'}`} onClick={() => { props.setDateSelected(new Date()) }}>
                <IoReload />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        dateSelected: state.timelineResult.dateSelected,
        typeOfAnalytics: state.timelineResult.typeOfAnalytics,
        weekTime: state.timelineResult.weekTime,
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