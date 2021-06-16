/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './DiaCard.css'
import { connect } from 'react-redux'
import { setDateSelected } from '../../store/actions/dateSelected'

const DiaCard = props => {
    return (
        <div className={`dia-card ${props.active}`} onClick={() => {
            props.setDateSelected(new Date(props.dateSelected.getTime() + (props.delta * 24 * 60 * 60 * 1000)))
        }}>
            <div className="sem">{props.sem}</div>
            <div className="dia">{props.dia}</div>
            <div className="mes">{props.mes}</div>
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
)(DiaCard)