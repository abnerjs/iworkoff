/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import DiaCard from './DiaCard'
import './Diaria.css'

export default props => {
    const semana = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB']
    const meses = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ']
    return (
        <div className='diaria'>
            <DiaCard
                dia={props.timeline[0].initialTime.getDate() - 3}
                mes={'MAI'}
                sem={semana[props.timeline[0].initialTime.getDay() - 3 + 7 % 7]}
            />
            <DiaCard 
                dia={props.timeline[0].initialTime.getDate() - 2}
                mes={'JUN'} 
                sem={semana[props.timeline[0].initialTime.getDay() - 2 + 7 % 7]} 
            />
            <DiaCard 
                dia={props.timeline[0].initialTime.getDate() - 1}
                mes={'JUN'} 
                sem={semana[props.timeline[0].initialTime.getDay() - 1 + 7 % 7]} 
            />
            <DiaCard 
                dia={props.timeline[0].initialTime.getDate()}
                mes={meses[props.timeline[0].initialTime.getMonth() - 1]} 
                sem={semana[props.timeline[0].initialTime.getDay()]} 
            />
            <DiaCard 
                dia={props.timeline[0].initialTime.getDate() + 1}
                mes={'JUN'} 
                sem={semana[(props.timeline[0].initialTime.getDay() + 1) % 7]} 
            />
            <DiaCard 
                dia={props.timeline[0].initialTime.getDate() + 2} 
                mes={'JUN'} 
                sem={semana[(props.timeline[0].initialTime.getDay() + 2) % 7]} 
            />
            <DiaCard 
                dia={props.timeline[0].initialTime.getDate() + 3}
                mes={'JUN'} 
                sem={semana[(props.timeline[0].initialTime.getDay() + 3) % 7]} 
            />
        </div>
    )
}