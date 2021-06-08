/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './Submit.css'

export default props =>
    <input type='submit' className='button' value={props.content} />