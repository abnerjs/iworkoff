/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { Link } from 'react-router-dom'
import Field from '../components/Field'
import Submit from '../components/Submit'
import Button from '../components/Button'
import './Recovery.css'

export default props =>
    <div className='recovery'>
        <form action="" className="form">
        <Field type='email' id='email' title='Email de recuperação' placeholder='Email' />
        {/* when clicked setState of IconifiedTitle content to "Recuperação" */}
        <Submit content='Enviar' />
        </form>
        <Link to='/' onClick={() =>  props.setSection('Login')} >
            <Button content='Cancelar' secondary />
        </Link>
    </div>