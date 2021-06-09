import React from 'react'
import './DetailsTitle.css'
import { GoArrowLeft } from "react-icons/go";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div className='detailsTitle'>
            <GoArrowLeft />
            <p className="nome">{props.name}&nbsp;</p>
            <p className="status">{props.status}</p>
            <svg className='statusCircle'>
                <circle cx="14" cy="14" r="7" fill={
                    props.status === 'Online' ? '#009444' :
                        props.status === 'Ausente' ? 'FBB040' : '#78787880'
                } />
            </svg>
        </div>
    )
}