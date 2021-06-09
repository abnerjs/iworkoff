/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import DiaCard from './DiaCard'
import './Diaria.css'

export default props => {
    return (
        <div className='diaria'>
            <DiaCard dia={31} mes={'MAI'} sem={'SEG'} />
            <DiaCard dia={1} mes={'JUN'} sem={'TER'} />
            <DiaCard dia={2} mes={'JUN'} sem={'QUA'} />
            <DiaCard dia={3} mes={'JUN'} sem={'QUI'} />
            <DiaCard dia={4} mes={'JUN'} sem={'SEX'} />
            <DiaCard dia={5} mes={'JUN'} sem={'SÁB'} />
            <DiaCard dia={6} mes={'JUN'} sem={'DOM'} />
        </div>
    )
}