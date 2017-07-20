import React, { Component } from 'react'
import { connect } from 'react-redux'

import CompositeLegend from './CompositeLegend'
import Label from './label'
import {
    changeItem
} from '../actions'

const mapStateToProps = (state) => ({
    items: state.uploadItems,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChangeFormItem: (text) => {
        dispatch(changeItem(ownProps.index, text))
    }
})

let FormItem = ({ item, index, action, onChangeFormItem }) => {
    return (
        <div>
            <fieldset>
                <CompositeLegend item={ item } index={ index } />
                <Label label="Name" />
                <div className="col-9">
                    <input id={`id_form-${index}-name`} className="form-control" onChange={ (e) => onChangeFormItem(e.target.value) } name={`form-${index}-name`} defaultValue={ item.name } value={ item.text } type="text" />
                </div>
            </fieldset>
        </div>
    )
}

// FormItem.propTypes = {
//     onClick: PropTypes
// }

export default FormItem = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormItem)
