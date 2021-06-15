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

function rows2(data) {

    return (
        <div className="rows">
            
            {data.map((value, index) => {
                return (
                    <div
                        className={`row ${'cor' + (index % 3).toString()} ${value.isAuth ? 'auth' : 'noauth'}`}
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

function rows(data) {

    const result = data.reduce(function (r, a) {
        r[a.app] = r[a.app] || []
        r[a.app].push(a)
        return r
    }, Object.create(null))

    const keys = Object.keys(result)

    return (
        <div className="rows">
            
            {keys.map((key, index) => {
                return (
                    <div
                        className={`row ${'cor' + (index % 3).toString()} ${result[key][0].isAuth ? 'auth' : 'noauth'}`}
                        style={{
                            height: (100 / keys.length) + '%',
                        }}
                        key={index}
                    >

                        <div
                            className="bar"
                            style={{
                                width: (result[key][0].diffMs / 86400 * 100) + '%',
                                marginLeft: timeMargin(result[key][0].initialTime) / 86400 * 100 + '%',
                            }}
                        >
                        </div>
                        <div className='appInfo'>
                            <div className="app"> {key} </div>
                            <div className="timeInfo">{result[key][0].diff.toString()}</div>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}

export default props => {

    const result = props.data.reduce(function (r, a) {
        r[a.app] = r[a.app] || []
        r[a.app].push(a)
        return r
    }, Object.create(null))

    const keys = Object.keys(result)

    keys.map((key, index) => {
        console.log(result[key])
    })

    return (
        <div className="timeline">
            {timeLine()}
            {rows(props.data)}
        </div>
    )
}