/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import DetailsTitle from '../components/DetailsTitle'
import DateSectionController from '../components/dateControls/DateSectionController'
import ChartContainer from '../components/dataInfo/ChartContainer'
import './Details.css'
import ActivitiesData from '../components/dataInfo/ActivitiesData'
import DataSide from '../components/dataInfo/DataSide'
import AppsUtilizados from '../components/dataInfo/AppsUtilizados'

export default props => {
    const tempoAuth = {
        h: 7,
        min: 15,
        s: 46
    }
    const tempoNoAuth = {
        h: 7,
        min: 15,
        s: 46
    }
    const tempoIdling = {
        h: 7,
        min: 15,
        s: 46
    }
    const inicio = {
        h: 7,
        min: 59,
        s: 46
    }
    const fim = {
        h: 17,
        min: 32,
        s: 6
    }
    const total = {
        h: 9,
        min: 34,
        s: 6
    }
    const ativo = {
        h: 8,
        min: 5,
        s: 6
    }
    const inativo = {
        h: 1,
        min: 29,
        s: 6
    }

    return (
        <div className='details'>
            <div className="main">
                <DetailsTitle name='Victor Rocha Azevedo' status='Online' />
                <DateSectionController />
                <ChartContainer />
                <ActivitiesData
                    tempoAuth={tempoAuth}
                    tempoIdling={tempoIdling}
                    tempoNoAuth={tempoNoAuth}
                    percentAuth={86}
                    percentNoAuth={13}
                />
            </div>
            <div className="datatext">
                <DataSide
                    inicio={inicio}
                    final={fim}
                    total={total}
                    ativo={ativo}
                    inativo={inativo}
                />
                <AppsUtilizados />
            </div>
        </div>
    )
}