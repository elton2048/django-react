import React, { Component } from 'react'
import CompositeLegend from './CompositeLegend'

const FormItem = ({ item, index, action }) => {
    return (
        <div>
            <fieldset>
                <CompositeLegend item={ item } index={ index } action={ action } />
            </fieldset>
        </div>
    )
}

// FormItem.propTypes = {
//     onClick: PropTypes
// }

export default FormItem
