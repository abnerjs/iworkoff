/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import IconifiedTitle from '../components/IconifiedTitle'
import './FirstPage.css'
import Login from './Login'

export default props => 
    <div className='login'>
        <div className="formdiv">
            <Switch className=''>
                <Route path='/recovery'>
                    <h1>
                        TESTE
                    </h1>
                </Route>
                <Route path='/'>
                    <IconifiedTitle content='Login' />
                    <Login />
                </Route>
            </Switch>
        </div>
        <div className="art">
            
        </div>
    </div>