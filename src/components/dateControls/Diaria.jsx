/* eslint-disable import/no-anonymous-default-export */
import React, { useCallback, useEffect, useState } from 'react'
import DiaCard from './DiaCard'
import './Diaria.css'

export default props => {
    const [daySelect, setDaySelect] = useState(
        localStorage.getItem('daySelect') ? new Date(localStorage.getItem('daySelect')) : new Date()
    )

    useEffect(() => {
        localStorage.setItem('daySelect', daySelect)
    }, [daySelect])

    const datesAround = useCallback(function (delta) {
        console.log(delta)
        setDaySelect(new Date(daySelect.getTime() + (delta * 24 * 60 * 60 * 1000)))
        console.log(daySelect)
    }, [daySelect])


    const semana = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB']
    const meses = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ']
    return (
        <div className='diaria' >
            <DiaCard datesAround={datesAround} delta={-3}
                dia={(new Date(daySelect.getTime() - (3 * 24 * 60 * 60 * 1000))).getDate()}
                mes={meses[new Date(daySelect.getTime() - (3 * 24 * 60 * 60 * 1000)).getMonth()]}
                sem={semana[((daySelect.getDay() - 3) + 7) % 7]}
            />
            <DiaCard datesAround={datesAround} delta={-2}
                dia={(new Date(daySelect.getTime() - (2 * 24 * 60 * 60 * 1000))).getDate()}
                mes={meses[new Date(daySelect.getTime() - (2 * 24 * 60 * 60 * 1000)).getMonth()]}
                sem={semana[((daySelect.getDay() - 2) + 7) % 7]}
            />
            <DiaCard datesAround={datesAround} delta={-1}
                dia={(new Date(daySelect.getTime() - (1 * 24 * 60 * 60 * 1000))).getDate()}
                mes={meses[new Date(daySelect.getTime() - (1 * 24 * 60 * 60 * 1000)).getMonth()]}
                sem={semana[((daySelect.getDay() - 1) + 7) % 7]}
            />
            <DiaCard datesAround={datesAround} delta={0}
                active
                dia={daySelect.getDate()}
                mes={meses[daySelect.getMonth()]}
                sem={semana[daySelect.getDay()]}
            />
            <DiaCard datesAround={datesAround} delta={1}
                dia={(new Date(daySelect.getTime() + (1 * 24 * 60 * 60 * 1000))).getDate()}
                mes={meses[new Date(daySelect.getTime() + (1 * 24 * 60 * 60 * 1000)).getMonth()]}
                sem={semana[(daySelect.getDay() + 1) % 7]}
            />
            <DiaCard datesAround={datesAround} delta={2}
                dia={(new Date(daySelect.getTime() + (2 * 24 * 60 * 60 * 1000))).getDate()}
                mes={meses[new Date(daySelect.getTime() + (2 * 24 * 60 * 60 * 1000)).getMonth()]}
                sem={semana[(daySelect.getDay() + 2) % 7]}
            />
            <DiaCard datesAround={datesAround} delta={3}
                dia={(new Date(daySelect.getTime() + (3 * 24 * 60 * 60 * 1000))).getDate()}
                mes={meses[new Date(daySelect.getTime() + (3 * 24 * 60 * 60 * 1000)).getMonth()]}
                sem={semana[(daySelect.getDay() + 3) % 7]}
            />
        </div>
    )
}