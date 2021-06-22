/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
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

function stringToDate(dtaHorInicio) {
    const tmpaux = dtaHorInicio.split(/[- :]/)
    return new Date(tmpaux[0], tmpaux[1] - 1, tmpaux[2], tmpaux[3], tmpaux[4], tmpaux[5])
}

function secondsToHours(sec) {
    var aux = new Date(1970, 0, 1)
    aux.setSeconds(sec)
    var textual = ''

    if (aux.getHours() > 0)
        textual += aux.getHours() + 'h'

    if (aux.getMinutes() > 0)
        textual += aux.getMinutes() + 'min'

    if (aux.getHours() <= 0 && aux.getMinutes() <= 0)
        textual += aux.getSeconds() + 's'

    return textual
}

function timeMargin(element, index) {

    var diff = stringToDate(element[index].dtaInicio).getHours() * 60 * 60
    diff += stringToDate(element[index].dtaInicio).getMinutes() * 60
    diff += stringToDate(element[index].dtaInicio).getSeconds()


    if (index > 0) {
        diff -= stringToDate(element[index - 1].dtaFim).getHours() * 60 * 60
        diff -= stringToDate(element[index - 1].dtaFim).getMinutes() * 60
        diff -= stringToDate(element[index - 1].dtaFim).getSeconds()
    }

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
    var final = new Date(stringToDate(element.dtaFim))
    if (stringToDate(element.dtaFim).getDate() > stringToDate(element.dtaInicio).getDate()) {
        final.setHours(23)
        final.setMinutes(59)
        final.setSeconds(59)
    }

    var diff = 0
    diff = (final.getHours() - stringToDate(element.dtaInicio).getHours()) * 60 * 60
    diff += (final.getMinutes() - stringToDate(element.dtaInicio).getMinutes()) * 60
    diff += final.getSeconds() - stringToDate(element.dtaInicio).getSeconds()

    return diff
}


function rows(data, typeOfAnalytics, dataWeek) {
    if (typeOfAnalytics === 'Diário') {
        const result = data ? data.reduce(function (r, a) {
            r[a.desProcesso] = r[a.desProcesso] || []
            r[a.desProcesso].push(a)
            return r
        }, Object.create(null)) : {}

        const keys = result ? Object.keys(result) : {}

        for (let key of keys) {

            result[key].sort(function (a, b) {
                var x = stringToDate(a.dtaInicio)
                var y = stringToDate(b.dtaInicio)
                if (x < y)
                    return -1
                else if (x === y)
                    return 0
                else
                    return 1
            })

        }

        return (
            <div className="rows">

                {keys.map((key, index) => {
                    return (
                        <div
                            className={`row diario row${index} ${'cor' + (index % 3).toString()} ${result[key][0].flgAutorizado === 'S' ? 'auth' : 'noauth'}`}
                            style={{
                                height: (100 / keys.length) + '%',
                            }}
                            key={index}
                        >
                            <div className={`appInfo`} id={`rowInfo${index}`}>
                                <div className="app"> {key} </div>
                                <div className="timeInfo">{groupTime(result[key])}</div>
                            </div>
                            {result[key].map((element, indexj) => {
                                return (
                                    <div
                                        tooltip={`${stringToDate(element.dtaInicio).getHours()}h${stringToDate(element.dtaInicio).getMinutes()}min - ${stringToDate(element.dtaFim).getHours()}h${stringToDate(element.dtaFim).getMinutes()}min`}
                                        flow={'left'}
                                        fulltime={'Uso: ' + secondsToHours(element.tempoUsoSegundos)}
                                        className={`bar ${result[key][0].flgAutorizado === 'S' ? 'auth' : 'noauth'}`}
                                        style={{
                                            width: (msUntilMidnight(element) / 86400 * 100) + '%',
                                            marginLeft: timeMargin(result[key], indexj) / 86400 * 100 + '%',
                                        }}
                                    >
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        )
    } else if (typeOfAnalytics === 'Semanal') {
        const semanaDays = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira']
        return (
            <div className="rows">
                {dataWeek.map((dataDay, index) => {
                    return (
                        <div className="row semanal" style={{
                            height: '20%',
                        }}>
                            <div className={`appInfo`} id={`rowInfo${index}`}>
                                <div className="app"> {semanaDays[stringToDate(dataDay.dtaHorInicio).getDay() - 1]} </div>
                                <div className="timeInfo"> {secondsToHours(dataDay.tempoRegistradoSegundos)} </div>
                            </div>
                            {dataDay.lstAtividades.map((element, indexj) => {
                                return (
                                    <div
                                        tooltip={`${stringToDate(element.dtaInicio).getHours()}h${stringToDate(element.dtaInicio).getMinutes()}min - ${stringToDate(element.dtaFim).getHours()}h${stringToDate(element.dtaFim).getMinutes()}min`}
                                        flow={'left'}
                                        fulltime={'Uso: ' + secondsToHours(element.tempoUsoSegundos)}
                                        className={`bar ${element.flgAutorizado === 'S' ? 'auth' : 'noauth'}`}
                                        style={{
                                            width: (msUntilMidnight(element) / 86400 * 100) + '%',
                                            marginLeft: timeMargin(dataDay.lstAtividades, indexj) / 86400 * 100 + '%',
                                        }}
                                    >
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        )
    }
}

const TimelineChart = props => {
    return (
        <div className="timeline">
            {timeLine()}
            {rows(props.data, props.typeOfAnalytics, props.dataWeek)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.timelineResult.data,
        typeOfAnalytics: state.timelineResult.typeOfAnalytics,
        dataWeek: state.timelineResult.dataWeek,
    }
}

export default connect(
    mapStateToProps
)(TimelineChart)