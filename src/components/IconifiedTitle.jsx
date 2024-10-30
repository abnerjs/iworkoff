/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './IconifiedTitle.css'
import dots from '../assets/images/dots.png'
import Title from './Title'

export default props =>
    <div className="icon-title">
        <div className='row'>
            <img src={dots} alt="iWorkOff" />
            <Title content={props.content} />
        </div>
    </div>