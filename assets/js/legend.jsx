import React, { Component } from 'react'

const legendStyle = {
    width: '74%',
}

class CompositeLegend extends Component {

    render () {
        // console.log(this.props);
        return (
            <legend style={legendStyle}>
                <div className="row">
                    <span className="col-4">Song #{this.props.id + 1}</span>
                    <div className="col-8 pull-right">
                        <input onClick={ () => {this.props.action(this.props.id)} } id={`button-id-delete-${this.props.id}`} className="btn btn-danger" name={`delete-${this.props.id}`} value="Delete" type="button" />
                    </div>
                </div>
            </legend>
        )
    }
}

export default CompositeLegend
