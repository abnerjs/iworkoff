/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './TimelineChart.css'

function timeLine() {

    return (
        <div className='time-description'>
            <div>0h</div>
            <div>3h</div>
            <div>6h</div>
            <div>9h</div>
            <div>12h</div>
            <div>15h</div>
            <div>18h</div>
            <div>21h</div>
            <div>0h</div>
        </div>
    )
}

function rows(data) {

    return (
        <div className="rows">
            {data.map((value, index) => {
                return <div className="row" key={index}>{value.app}</div>
            })}    
        </div>
    )
}

export default props => {
    return (
        <div className="timeline">
            {timeLine()}
            {rows(props.data)}
        </div>
    )
}