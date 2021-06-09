/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { Route, Switch } from 'react-router'
import Nav from '../components/Nav'
import './Dashboard.css'
import Details from './Details'

export default props => {
    return (
        <div className='dashboard'>
            <Nav />
            <Details />
            {/*
                <Switch>
                    <Route path='/details'>
                    </Route>
                </Switch>
            */}
        </div>
    )
}