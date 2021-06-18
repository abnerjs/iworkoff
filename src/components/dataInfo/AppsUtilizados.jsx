import React from 'react'
import Title from '../Title'
import './AppsUtilizados.css'
import AppCollapse from './AppCollapse'
import { connect } from 'react-redux'

const AppsUtilizados = props => {

    if (props.data) {
        return (
            <div className="apps-util-container">
                <Title content='Apps utilizados' />
                <div className="apps-util">
                    <div className="apps-util-content">{
                        props.data.map((key, index) => {
                            return <AppCollapse app={key} />
                        })
                    }</div>
                </div>
            </div>
        )
    } else
        return ''
}

const mapStateToProps = state => {
    return {
        data: state.timelineResult.dataBrief,
    }
}

export default connect(
    mapStateToProps
)(AppsUtilizados)