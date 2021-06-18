/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import DetailsTitle from '../components/DetailsTitle'
import DateSectionController from '../components/dateControls/DateSectionController'
import ChartContainer from '../components/dataInfo/ChartContainer'
import './Details.css'
import ActivitiesData from '../components/dataInfo/ActivitiesData'
import DataSide from '../components/dataInfo/DataSide'
import AppsUtilizados from '../components/dataInfo/AppsUtilizados'
import {
    inicio, fim, total, inativo, ativo
} from '../store/DatetimeInfo'
import Diaria from '../components/dateControls/Diaria'

export default props => {

    return (
        <div className='details'>
            <div className="main">
                <DetailsTitle />
                <DateSectionController />
                <Diaria />
                <ChartContainer />
                <ActivitiesData />
            </div>
            <div className="datatext">
                <DataSide />
                <AppsUtilizados />
            </div>
        </div>
    )
}