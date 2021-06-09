/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './Art.css'
import UncontrolledLottie from '../components/UncontrolledLottie'
import logo from '../assets/images/Marca.png'

export default props => {
    return (
        <div className="art">
                        <div className='image'>
                            <img src={logo} alt="" className="logo" />
                        </div>
                        <UncontrolledLottie />
                    </div>
    )
}