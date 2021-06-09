/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import IconifiedTitle from '../components/IconifiedTitle'
import UncontrolledLottie from '../components/UncontrolledLottie'
import './FirstPage.css'
import Login from './Login'
import logo from '../assets/images/Marca.png'
import Recovery from './Recovery'

export default props => {
    const [section, setSection] = useState('Login')

    return (
        <div className='login'>
        <div className="formdiv">
            <IconifiedTitle content={section} />
            <Switch className=''>
                <Route path='/recovery'>
                    <Recovery setSection={setSection} />
                </Route>
                <Route path='/'>
                    <Login setSection={setSection} /> 
                </Route>
            </Switch>
        </div>
        <div className="art">
            <div className='image'>
                <img src={logo} alt="" className="logo" />
            </div>
            <UncontrolledLottie />
        </div>
    </div>
    )
}