import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormItem from '../components/formitem'

import {
    addItem,
    deleteItem,
    addSongInput,
} from '../actions/'

const mapStateToProps = (state) => ({
    items: state.uploadItems,
    uiReducers: state.uiReducers
})

const mapDispatchToProps = (dispatch) => ({
    onCreateFormItem: (number = 1) => {
        for (let i = 0; i < number; i++) {
            dispatch(addItem())
        }
    },
    onDeleteFormItem: (id) => {
        dispatch(deleteItem(id))
    },
    onAddSongFieldChange: (e) => {
        dispatch(addSongInput(e.target.value))
    },
})


let FormItemList = ({
    items,
    uiReducers,
    onCreateFormItem,
    onDeleteFormItem,
    onAddSongFieldChange
}) => {
    let input

    return (
        <div>
            <div className="col-lg-3">
                <div className="input-group">
                    <input name="song_number" type="text" className="form-control" ref={node => {input = node}} onChange={ onAddSongFieldChange } value={uiReducers.addSongInput} />
                    <span className="input-group-btn">
                        <button onClick={ () => onCreateFormItem(input.value) } className="btn btn-secondary" type="button">Add</button>
                    </span>
                </div>
            </div>
            <fieldset>
                {
                    items.uploadItems.map((item, index) => (
                        <FormItem key={ index } index={ index } item={ item } />
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
