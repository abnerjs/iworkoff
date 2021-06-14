/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './ChartContainer.css'
import TimelineChart from './TimelineChart';

export default props => {
    
    return (
        <div className='chart-container'>

            <TimelineChart
                data={props.apps}
                options={{
                    colors: ['#009444', '#FBB040', '#BE1E2D', '#000'],
                }}
            />
        </div>
    )
}