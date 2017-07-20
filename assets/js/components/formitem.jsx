import React, { Component } from 'react'
import CompositeLegend from './CompositeLegend'
import Label from './label'

const FormItem = ({ item, index, action }) => {
    return (
        <div>
            <fieldset>
                <CompositeLegend item={ item } index={ index } />
                <Label label="Name" />
            </fieldset>
        </div>
    )
}

// FormItem.propTypes = {
//     onClick: PropTypes
// }

export default FormItem
