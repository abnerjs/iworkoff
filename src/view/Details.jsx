/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import DetailsTitle from '../components/DetailsTitle'
import DateSectionController from '../components/dateControls/DateSectionController'
import ChartContainer from '../components/dataInfo/ChartContainer'
import './Details.css'
import ActivitiesData from '../components/dataInfo/ActivitiesData'
import DataSide from '../components/dataInfo/DataSide'
import AppsUtilizados from '../components/dataInfo/AppsUtilizados'
import {
    timeline, pessoa, tempoAuth, tempoIdling, tempoNoAuth,
    inicio, fim, total, inativo, ativo
} from '../fakeData/DatetimeInfo'
import { Collapse } from 'react-collapse';

export default props => {

    return (
        <div className='details'>
            <div className="main">
                <DetailsTitle name={pessoa.nome} status={pessoa.status} />
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
                <Collapse isOpened={false}>
                    <div>Random content</div>
                </Collapse>
                <p>{timeline[0].app}</p>
            </div>
        </div>
    )
}