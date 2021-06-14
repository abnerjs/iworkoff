/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './DateSectionController.css'

export default props => {
    const [dateSelect, setDateSelect] = useState('Diário')

    return (
        <div className='date-section'>
            <div className="selectors">
                <Link to='/home' onClick={() => setDateSelect('Diário')} className={`link
                ${dateSelect === 'Diário' ? 'active' : ''}
            `}>
                    Diário
            </Link>

                <Link to='/home' onClick={() => setDateSelect('Semanal')} className={`link
                ${dateSelect === 'Semanal' ? 'active' : ''}
            `}>
                    Semanal
            </Link>

                <Link to='/home' onClick={() => setDateSelect('Mensal')} className={`link
                ${dateSelect === 'Mensal' ? 'active' : ''}
            `}>
                    Mensal
            </Link>
            </div>
        </div>
    )
}