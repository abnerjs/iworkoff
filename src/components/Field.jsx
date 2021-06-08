/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './Field.css'

export default props =>
    <div className='field'>
        <label htmlFor={props.id}>{props.title}</label>
        <input type={props.type} name={props.id} id={props.id} placeholder={props.title} />
    </div>