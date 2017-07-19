import React, { Component} from 'react'

class Label extends Component {
    render() {
        return(
            <label className="control-label col-2" >
                {this.props.label}
            </label>
        )
    }
}

export default Label
