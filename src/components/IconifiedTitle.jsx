/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './IconifiedTitle.css'
import dots from '../assets/images/dots.png'

export default props =>
    <div className="icon-title">
        <div class='row'>
            <img src={dots} alt="iWorkOff" />
            <h1>{props.content}</h1>
        </div>
    </div>