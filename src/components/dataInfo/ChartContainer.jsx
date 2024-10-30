import React from 'react'
import { connect } from 'react-redux';
import './ChartContainer.css'
import TimelineChart from './TimelineChart';
import { UncontrolledLottieNoData } from '../UncontrolledLottie'

const ChartContainer = props => {
    if((props.typeOfAnalytics === 'Diário' && props.data) || (props.typeOfAnalytics === 'Semanal' && props.dataWeek.length > 0)) {
        return (
            <div className='chart-container'>
                <TimelineChart />
            </div>
        )
    } else {
        return (
            <div className='chart-container'>
                <UncontrolledLottieNoData />
                <div className='chart-desc'>
                    Nenhum dado para mostrar...
                </div>
            </div>
        )
    }
    
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
)(ChartContainer)