import React from 'react'
import './DetailsTitle.css'
import { GoArrowLeft } from "react-icons/go";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// eslint-disable-next-line import/no-anonymous-default-export
const DetailsTitle = props => {
    const person = props.person
    return (
        <Link to='/' className='linkToHome'>
            <div className='detailsTitle'>
                <GoArrowLeft />
                <p className="nome">{person.name}&nbsp;</p>
                <p className="status">{person.status}</p>
                <svg className='statusCircle'>
                    <circle cx="14" cy="14" r="7" fill={
                        person.status === 'Online' ? '#009444' :
                            person.status === 'Ausente' ? '#FBB040' : '#78787880'
                    } />
                </svg>
            </div>
        </Link>
    )
}

const mapStateToProps = state => {
    return {
        person: state.person
    }
}

export default connect(mapStateToProps)(DetailsTitle)