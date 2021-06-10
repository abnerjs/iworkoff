/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import DetailsTitle from '../components/DetailsTitle'
import DateSectionController from '../components/dateControls/DateSectionController'
import ChartContainer from '../components/dataInfo/ChartContainer'
import './Details.css'
import ActivitiesData from '../components/dataInfo/ActivitiesData'

export default props => {
    const tempoAuth = {
        h: 7,
        min: 15,
        s: 46.
    }
    const tempoNoAuth = {
        h: 7,
        min: 15,
        s: 46.
    }
    const tempoIdling = {
        h: 7,
        min: 15,
        s: 46.
    }

    return (
        <div className='details'>
            <DetailsTitle name='Victor Rocha Azevedo' status='Online' />
            <DateSectionController />
            <ChartContainer />
            <ActivitiesData
                tempoAuth={tempoAuth}
                tempoIdling={tempoIdling}
                tempoNoAuth={tempoNoAuth}
                percentAuth={86}
                percentNoAuth={13}
            />
        </div>
    )
}