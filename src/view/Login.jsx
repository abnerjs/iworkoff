/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { Link } from 'react-router-dom'
import Field from '../components/Field'
import Submit from '../components/Submit'
import './Login.css'

export default props => 
    <form action="" className="form">
        <Field type='text' id='username' title='Nome de usuário' />
        <Field type='password' id='password' title='Senha' />
        <Link onClick={() => props.setSection('Recuperação')} className='forgot' to="/recovery">Esqueceu a senha?</Link>
        {/* when clicked setState of IconifiedTitle content to "Recuperação" */}
        <Submit content='Entrar' />
    </form>