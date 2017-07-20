import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
    deleteItem
} from '../actions/'
// import style from '../styles/legend.scss'

const mapDispatchToProps = (dispatch, ownProps) => ({
    onDeleteFormItem: () => {
        dispatch(deleteItem(ownProps.item.id))
    },
})

let CompositeLegend = (props) => {
    return (
        <legend className={`initial legendWidth`}>
            <div className={`row`}>
                <span className={props.delete == "true" ? `col-4` : `col-12`}>
                    {props.delete == "true" ? `Song #${props.index + 1}` : `${props.title}`}
                </span>
                <div className="col-8 pull-right">
                    {props.delete == "true" &&
                        <input onClick={ () => props.onDeleteFormItem() } id={`button-id-delete-${props.id}`} className="btn btn-danger" name={`delete-${props.id}`} value="Delete" type="button" />
                    }
                </div>
            </div>
        </legend>
    )
}

CompositeLegend.defaultProps = {
    delete: "true"
}

export default CompositeLegend = connect(
    null,
    mapDispatchToProps
)(CompositeLegend)
