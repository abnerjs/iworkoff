import React from 'react';
import Lottie from 'lottie-web'
import animationData from '../assets/lotties/iworkoff.json';
import animationDataNoData from '../assets/lotties/noDataChart.json';
import './UncontrolledLottie.css';

export function UncontrolledLottieLogin() {
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

export function UncontrolledLottieNoData() {
    React.useEffect(() => {
        Lottie.loadAnimation({
            container: document.querySelector('#lottiePrincipal'),
            animationData: animationDataNoData,
        })
    }, [])

    return (
        <div id='lottiePrincipal'></div>
    );
}