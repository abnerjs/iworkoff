/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { Link } from 'react-router-dom'
import './DateSectionController.css'
import { setTypeOfAnalytics } from '../../store/actions/typeOfAnalytics'
import { connect } from 'react-redux'

const DateSectionController = props => {

    return (
        <div className='date-section'>
            <div className="selectors">
                <Link to='/home'
                    onClick={
                        () => props.setTypeOfAnalytics(0)
                    }
                    className={`link
                        ${props.typeOfAnalytics === 'Diário' ? 'active' : ''}
                    `}>
                    Diário
                </Link>

                <Link to='/home'
                    onClick={
                        () => props.setTypeOfAnalytics(1)
                    }
                    className={`link
                        ${props.typeOfAnalytics === 'Semanal' ? 'active' : ''}
                    `}>
                    Semanal
                </Link>

                <Link to='/home' 
                    onClick={
                        () => props.setTypeOfAnalytics(2)
                    } 
                    className={`link
                        ${props.typeOfAnalytics === 'Mensal' ? 'active' : ''}
                    `}>
                    Mensal
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        dateSelected: state.timelineResult.dateSelected,
        typeOfAnalytics: state.timelineResult.typeOfAnalytics,
    }
}

const mapDispatchToProp = dispatch => {
    return {
        setTypeOfAnalytics(newNumber) {
            const action = setTypeOfAnalytics(newNumber)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(DateSectionController)