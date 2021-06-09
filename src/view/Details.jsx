/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import DetailsTitle from '../components/DetailsTitle'
import DateSectionController from '../components/DateSectionController'
import './Details.css'

export default props => {
    return (
        <div className='details'>
            <DetailsTitle name='Victor Rocha Azevedo' status='Online' />
            <DateSectionController />
        </div>  
    )
}