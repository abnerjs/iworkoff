/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './Nav.css'
import logo from '../assets/images/Marca.png'
import Searchbar from './Searchbar'
import { IoChevronDownSharp } from "react-icons/io5";

export default props => {
    return (
        <nav className='nav'>
            <div className='inline'>
                <img src={logo} alt="" className='logo' />
                <Searchbar />
            </div>
            <div className="logged inline">
                <p>Fulano da Silva</p>
                <IoChevronDownSharp />
            </div>
        </nav>
    )
}