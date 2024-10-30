/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './Title.css'

export default props => {
    return (
        <h1 className='title'>{props.content}</h1>
    )
}