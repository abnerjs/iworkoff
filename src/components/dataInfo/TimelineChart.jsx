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

function timeMargin(initialTime) {
    var diff = initialTime.getHours() * 60 * 60
    diff += initialTime.getMinutes() * 60
    diff += initialTime.getSeconds()
    return diff
}

function rows(data) {

    return (
        <div className="rows">
            
            {data.map((value, index) => {
                return (
                    <div
                        className={`
                            row
                            ${'cor' + (index % 3).toString()} 
                            ${value.isAuth ? 'auth' : 'noauth'}
                        `}
                        style={{
                            height: (100 / data.length) + '%',
                        }}
                        key={index}
                    >

                        <div
                            className="bar"
                            style={{
                                width: (value.diffMs / 86400 * 100) + '%',
                                marginLeft: timeMargin(value.initialTime) / 86400 * 100 + '%',
                            }}
                        >
                        </div>
                        <div className='appInfo'>
                            <div className="app"> {value.app} </div>
                            <div className="timeInfo">{value.diff.toString()}</div>
                        </div>

                    </div>
                )
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