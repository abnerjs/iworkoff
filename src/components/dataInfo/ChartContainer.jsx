/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './ChartContainer.css'
import Chart from "react-google-charts";

export default props => {
    const columns = [
        { type: 'string', id: 'app' },
        { type: 'datetime', id: 'Start' },
        { type: 'datetime', id: 'End' }
    ]

    var rows = [
        [props.apps[0].app, props.apps[0].initialTime, props.apps[0].finalTime],
        [props.apps[1].app, props.apps[1].initialTime, props.apps[1].finalTime],
        [props.apps[2].app, props.apps[2].initialTime, props.apps[2].finalTime]
    ]

    const chartData = [columns, ...rows]

    return (
        <div className='chart-container'>
            <Chart
                className='chart'
                width='100%'
                height="100%"
                chartType="Timeline"
                loader={<div>Carregando chart</div>}
                data={chartData}
                options={{
                    showRowNumber: true,
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    )
}