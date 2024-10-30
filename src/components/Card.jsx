/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import 'Card.css'
import { Link } from 'react-router-dom'

export default props =>
    <Link to='/detail' className='card'>
        <div className='primary'>
            <div className='personal'>
                {props.name}
                {props.email}
            </div>

            <div className='sw'>
                Agora: <span>{props.software}</span>
            </div>
        </div>
        <div>
            <div className="left">{props.grupo}</div>
            <div className="right"><p>Detalhar</p></div>
        </div>
    </Link>