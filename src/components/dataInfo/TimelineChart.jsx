/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
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

function diffTime(final, init) {
    var h = final.getHours() - init.getHours()
    var min = final.getMinutes() - init.getMinutes()
    var s = final.getSeconds() - init.getSeconds()

    if (h < 0) {
        h = (24 - init.getHours()) + final.getHours()
    }

    if (min < 0) {
        h--
        min = (min + 60) % 60
    }

    return `Total: ${h > 0 ? h + 'h' : ''}${min > 0 ? min + 'min' : ''}${h < 0 && min < 0 ? s + 's' : ''}`
}

function timeMargin(element, index) {
    var diff = element[index].initialTime.getHours() * 60 * 60
    diff += element[index].initialTime.getMinutes() * 60
    diff += element[index].initialTime.getSeconds()

    for (let i = 0; i < index; i++) {
        diff -= element[i].initialTime.getHours() * 60 * 60
        diff -= element[i].initialTime.getMinutes() * 60
        diff -= element[i].initialTime.getSeconds()
        diff -= element[i].diffMs
    }

    return diff
}

function totalTimeMargin(element) {
    var diff = element.initialTime.getHours() * 60 * 60
    diff += element.initialTime.getMinutes() * 60
    diff += element.initialTime.getSeconds()
    return diff
}

function groupTime(elements) {
    var timed = 0
    elements.map((key, index) => {
        return timed += key.diffMs
    })

    var textual = ''

    const hours = Math.floor((timed / (60 * 60)) % 24)
    const minutes = Math.floor((timed / (60)) % 60)

    if (hours > 0) {
        textual += hours + ' hora'
        textual += (hours > 1) ? 's ' : ' '
    }

    if (minutes > 0) {
        if (minutes > 0 && hours > 0) {
            textual += 'e '
        }
        textual += minutes + ' minuto'
        textual += (minutes > 1) ? 's' : ''
    }

    return textual
}

function msUntilMidnight(element) {
    var final = new Date(element.finalTime)
    if (element.finalTime.getDate() > element.initialTime.getDate()) {
        final.setHours(23)
        final.setMinutes(59)
        final.setSeconds(59)
    } else if (element.initialTime.getDate() < element.finalTime.getDate()) {
        final.setHours(0)
        final.setMinutes(0)
        final.setSeconds(0)
    }


    var diff = 0
    diff = (final.getHours() - element.initialTime.getHours()) * 60 * 60
    diff += (final.getMinutes() - element.initialTime.getMinutes()) * 60
    diff += final.getSeconds() - element.initialTime.getSeconds()
    return diff
}

function rows(data, dateSelected) {

    const result = data.reduce(function (r, a) {
        r[a.app] = r[a.app] || []
        r[a.app].push(a)
        return r
    }, Object.create(null))

    const keys = Object.keys(result)

    return (
        <div className="rows">
            
            {keys.map((key, index) => {
                if (result[key][0].initialTime.getDate() === dateSelected.getDate()) {
                    return (
                        <div
                            className={`row row${index} ${'cor' + (index % 3).toString()} ${result[key][0].isAuth ? 'auth' : 'noauth'}`}
                            style={{
                                height: (100 / keys.length) + '%',
                            }}
                            key={index}
                        >
                            <div className={`appInfo`}
                                id={`rowInfo${index}`}
                            >
                                <div className="app"> {key} </div>
                                <div className="timeInfo">{groupTime(result[key])}</div>
                            </div>
                            {result[key].map((element, indexj) => {
                                if (element.initialTime.getDate() === dateSelected.getDate()) {
                                    return (
                                        <div
                                            tooltip={`${element.initialTime.getHours()}h${element.initialTime.getMinutes()}min - ${element.finalTime.getHours()}h${element.finalTime.getMinutes()}min`}
                                            flow={(totalTimeMargin(element) / 86400 * 100) < 50 ? 'right' : 'left'}
                                            fulltime={diffTime(element.finalTime, element.initialTime)}
                                            className={`bar ${result[key][0].isAuth ? 'auth' : 'noauth'}`}
                                            style={{
                                                width: (msUntilMidnight(element) / 86400 * 100) + '%',
                                                marginLeft: timeMargin(result[key], indexj) / 86400 * 100 + '%',
                                            }}
                                        >
                                        </div>
                                    )
                                } else {
                                    return ''
                                }
                            })}
                        </div>
                    )
                } else
                    return ''
            })}
        </div>
    )
}

const TimelineChart = props => {
    return (
        <div className="timeline">
            {timeLine()}
            {rows(props.data, props.dateSelected)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.timelineResult.data,
        dateSelected: state.timelineResult.dateSelected,
    }
}

export default connect(
    mapStateToProps
)(TimelineChart)