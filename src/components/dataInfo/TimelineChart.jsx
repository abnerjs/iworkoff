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
                console.log(`Programa ${index + 1}: ${value.initialTime.toString()}`)
                return (
                <div
                    className={`
                        row
                        ${'cor' + (index % 3).toString()}
                    `}
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

                    {value.app} /  {value.initialTime.getHours().toString()}  /  {value.diff.toString()}

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