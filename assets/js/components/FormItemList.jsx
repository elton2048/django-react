import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormItem from './formitem'

import {
    addItem,
    deleteItem,
} from '../actions/'

const mapStateToProps = (state) => ({
    items: state.uploadItems
})

const mapDispatchToProps = (dispatch) => ({
    onCreateFormItem: () => {
        dispatch(addItem())
    },
    onDeleteFormItem: (id) => {
        dispatch(deleteItem(id))
    },
})


let FormItemList = ({ items, onCreateFormItem, onDeleteFormItem }) => {
    return (
        <div>
            <button onClick={ onCreateFormItem } id={`test`} className="btn" type="button">Add</button>
            <fieldset>
                {
                    items.map((item, index) => (
                        <FormItem key={ index } index={ index } item={ item } action={ onDeleteFormItem } />
                    ))
                }
            </fieldset>
            <input id="submit-id-submit" className={`btn btn-primary pull-right`} name={`Submit`} value={`Save`} type={`submit`} />
        </div>
    )
}

export default FormItemList = connect(
    mapStateToProps,
    mapDispatchToProps,
)(FormItemList)

// export default FormItemList
