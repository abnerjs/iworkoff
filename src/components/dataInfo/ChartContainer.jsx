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
        [props.apps[2].app, props.apps[2].initialTime, props.apps[2].finalTime],
        ['teste', props.apps[0].initialTime, props.apps[0].finalTime],
        ['teste2', props.apps[0].initialTime, props.apps[0].finalTime],

    ]

    const chartData = [columns, ...rows]

    return (
        <div className='chart-container'>
            <Chart
                width={'100%'}
                height={'100%'}
                chartType="Timeline"
                loader={<div className='loadingChart'>Carregando gráfico...</div>}
                data={chartData}
                render={({ renderChart }) => {
                    return (
                        <div style={{ display: 'flex', height: '100%' }}>
                            <div style={{ width: '100%', height: '100%' }}>{renderChart()}</div>
                        </div>
                    )
                }}
                options={{
                    colors: ['#009444', '#FBB040', '#BE1E2D', '#000'],
                    showRowNumber: true,
                    timeline: {
                        rowLabelStyle: {
                            fontName: 'Poppins',
                            fontSize: 14,
                        },
                        barLabelStyle: { fontName: 'Poppins', fontSize: 20 },
                    },
                }}
                rootProps={{ 'data-testid': '0' }}
            />
        </div>
    )
}