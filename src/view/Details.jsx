/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import DetailsTitle from '../components/DetailsTitle'
import DateSectionController from '../components/dateControls/DateSectionController'
import ChartContainer from '../components/dataInfo/ChartContainer'
import './Details.css'
import ActivitiesData from '../components/dataInfo/ActivitiesData'
import DataSide from '../components/dataInfo/DataSide'
import AppsUtilizados from '../components/dataInfo/AppsUtilizados'
import Diaria from '../components/dateControls/Diaria'
import { connect } from 'react-redux'

const Details = props => {

    return (
        <div className='details'>
            <div className="main">
                <DetailsTitle />
                <DateSectionController />
                <Diaria />
                <ChartContainer />
                <ActivitiesData />
            </div>
            {props.data ? <div className="datatext">
                <DataSide />
                <AppsUtilizados />
            </div> : ''}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.timelineResult.data,
    }
}

export default connect(
    mapStateToProps
)(Details)