import React from 'react'
import Title from '../Title'
import './AppsUtilizados.css'
import AppCollapse from './AppCollapse'
import { connect } from 'react-redux'

const AppsUtilizados = props => {
    console.log(props.data)

    if (props.data) {
        return (
            <div className="apps-util">
                <Title content='Apps utilizados' />

                {
                    props.data.map((key, index) => {
                        return <AppCollapse app={key} />
                    })
                }
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