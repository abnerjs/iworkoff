/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Lottie from 'lottie-web'
import animationData from '../assets/lotties/iworkoff.json';
import './UncontrolledLottie.css';

export default function UncontrolledLottie() {
    React.useEffect(() => {
        Lottie.loadAnimation({
            container: document.querySelector('#lottiePrincipal'),
            animationData: animationData,
        })
    }, [])

    return (
        <div id='lottiePrincipal'></div>
    );
}