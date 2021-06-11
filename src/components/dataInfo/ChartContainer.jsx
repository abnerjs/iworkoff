/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './ChartContainer.css'
import Chart from "react-google-charts";

export default props => {

    return (
        <div className='chart-container'>
            <Chart
                chartType="Timeline"
                loader={<div>Carregando chart</div>}
                data={[
                    [
                        { type: 'string', id: 'app' },
                        { type: 'datetime', id: 'Start' },
                        { type: 'datetime', id: 'End' },
                    ],
                    [props.apps[0].app, props.apps[0].initialTime, props.apps[0].finalTime],
                    [props.apps[1].app, props.apps[1].initialTime, props.apps[1].finalTime],
                    [props.apps[2].app, props.apps[2].initialTime, props.apps[2].finalTime],
                ]}
                options={{
                    showRowNumber: true,
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    )
}