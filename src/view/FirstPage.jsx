/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import IconifiedTitle from '../components/IconifiedTitle'
import Art from './Art'
import './FirstPage.css'
import Login from './Login'
import Recovery from './Recovery'
import Dashboard from './Dashboard'

export default props => {
    const [section, setSection] = useState(
        localStorage.getItem('section') ? localStorage.getItem('section') : 'Login'
    )
    useEffect(() => {
        localStorage.setItem('section', section)
    }, [section]);

    return (
        <div className='page'>
            <Switch className=''>
                <Route path='/recovery'>
                    <div className="formdiv">
                        <IconifiedTitle content={section} />
                        <Recovery setSection={setSection} />
                    </div>
                    <Art />
                </Route>
                <Route path='/home'>
                    <Dashboard />
                </Route>
                <Route path='/'>
                    <div className="formdiv">
                        <IconifiedTitle content={section} />
                        <Login setSection={setSection} />
                    </div>
                    <Art />
                </Route>
            </Switch>
        </div>
    )
}