/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './ChartContainer.css'
import TimelineChart from './TimelineChart';

export default props => {
    
    return (
        <div className='chart-container'>
            <TimelineChart />
        </div>
    )
}