/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import IconifiedTitle from '../components/IconifiedTitle'
import UncontrolledLottie from '../components/UncontrolledLottie'
import './FirstPage.css'
import Login from './Login'
import logo from '../assets/images/Marca.png'

export default props =>
    <div className='login'>
        <div className="formdiv">
            <IconifiedTitle content='Login' />
            <Switch className=''>
                <Route path='/recovery'>
                    <h1>
                        TESTE
                    </h1>
                </Route>
                <Route path='/'>
                    <Login /> 
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