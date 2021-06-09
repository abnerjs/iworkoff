/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './Nav.css'
import logo from '../assets/images/Marca.png'
import Searchbar from './Searchbar'

export default props => {
    return (
        <nav className='nav'>
            <img src={logo} alt="" className='logo'/>
            <Searchbar />
        </nav>
    )
}