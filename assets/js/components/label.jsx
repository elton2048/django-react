import React, { Component} from 'react'

const Label = (props) => {
    return (
        <label className="control-label col-2" >
            {props.label}
        </label>
    )
}

export default Label
