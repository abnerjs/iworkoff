/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './ChartContainer.css'
/* import Chart from "react-google-charts"; */
import TimelineChart from './TimelineChart';

export default props => {
    
    return (
        <div className='chart-container'>
            {
                /*
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
                */
            }

            <TimelineChart
                data={props.apps}
                options={{
                    colors: ['#009444', '#FBB040', '#BE1E2D', '#000'],
                }}
            />
        </div>
    )
}