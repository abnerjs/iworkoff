/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react'
import DiaCard from './DiaCard'
import './Diaria.css'

export default props => {
    const [daySelect, setDaySelect] = useState(
        localStorage.getItem('daySelect') ? new Date(localStorage.getItem('daySelect')) : new Date()
    )
    useEffect(() => {
        localStorage.setItem('daySelect', daySelect)
    }, [daySelect]);

    console.log(daySelect)

    const semana = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB']
    const meses = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ']
    return (
        <div className='diaria'>
            <DiaCard
                dia={(new Date(daySelect.getTime() - (3 * 24 * 60 * 60 * 1000))).getDate()}
                mes={meses[new Date(daySelect.getTime() - (3 * 24 * 60 * 60 * 1000)).getMonth()]}
                sem={semana[(props.timeline[0].initialTime.getDay() - 3 + 7) % 7]}
            />
            <DiaCard 
                dia={(new Date(daySelect.getTime() - (2 * 24 * 60 * 60 * 1000))).getDate()}
                mes={meses[new Date(daySelect.getTime() - (2 * 24 * 60 * 60 * 1000)).getMonth()]}
                sem={semana[props.timeline[0].initialTime.getDay() - 2 + 7 % 7]} 
            />
            <DiaCard 
                dia={(new Date(daySelect.getTime() - (1 * 24 * 60 * 60 * 1000))).getDate()}
                mes={meses[new Date(daySelect.getTime() - (1 * 24 * 60 * 60 * 1000)).getMonth()]}
                sem={semana[daySelect.getDay() - 1 + 7 % 7]} 
            />
            <DiaCard 
                active
                dia={daySelect.getDate()}
                mes={meses[daySelect.getMonth()]} 
                sem={semana[daySelect.getDay()]} 
            />
            <DiaCard 
                dia={(new Date(daySelect.getTime() + (1 * 24 * 60 * 60 * 1000))).getDate()}
                mes={meses[new Date(daySelect.getTime() + (1 * 24 * 60 * 60 * 1000)).getMonth()]}
                sem={semana[(props.timeline[0].initialTime.getDay() + 1) % 7]} 
            />
            <DiaCard 
                dia={(new Date(daySelect.getTime() + (2 * 24 * 60 * 60 * 1000))).getDate()}
                mes={meses[new Date(daySelect.getTime() + (2 * 24 * 60 * 60 * 1000)).getMonth()]}
                sem={semana[(props.timeline[0].initialTime.getDay() + 2) % 7]} 
            />
            <DiaCard 
                dia={(new Date(daySelect.getTime() + (3 * 24 * 60 * 60 * 1000))).getDate()}
                mes={meses[new Date(daySelect.getTime() + (3 * 24 * 60 * 60 * 1000)).getMonth()]}
                sem={semana[(props.timeline[0].initialTime.getDay() + 3) % 7]} 
            />
        </div>
    )
}