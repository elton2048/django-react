import React, { Component } from 'react'

import Label from './label'
import CompositeLegend from './legend'
import UploadComponent from './uploadComponent'

class FormItem extends Component {

    constructor() {
        super()
        // console.log(status);
        this.uploaded = this.uploaded.bind(this)
        this.deleted = this.deleted.bind(this)
        this.state = {
            uploaded: false,
            path: ""
        }
    }

    uploaded(response) {
        this.setState({
            uploaded: true,
            path: response
        })
    }

    deleted() {
        this.setState({
            uploaded: false,
            path: ""
        })
    }

    render() {
        const options = status.map((state) =>
            <option value={ state[0] }>{ state[1] }</option>
        )
        return (
            <fieldset name={`app${ this.props.id }`} className="songitem" >
                <CompositeLegend id={ this.props.id } action={ this.props.handler } />
                <div className="form-group row">
                    <Label label="Name" />
                    <div className="col-9">
                        <input id={`id_form-${this.props.id}-name`} className="" name={`form-${this.props.id}-name`} defaultValue={ this.props.name } type="text" />
                    </div>
                </div>

                <div className="form-group row">
                    <Label label="File*" />
                    <div className="col-9">
                        <UploadComponent key={ this.props.id } className={`fileuploader-${ this.props.id }`} uploaded={ this.uploaded } deleted={ this.deleted } />
                    </div>
                    <input type="hidden" name={`form-0-file_${this.props.id}`} id={`id_form-${this.props.id}-fineuploader`} value={this.state.path} disabled={!this.state.uploaded} />
                </div>

                <div className="form-group row">
                    <Label label="Status*" />
                    <div className="col-9">
                        <select id={`id_form-${this.props.id}-status`} className={`select form-control`} name={`form-${this.props.id}-status`}>
                            { options }
                        </select>
                    </div>
                </div>

            </fieldset>
        )
    }
}

export default FormItem
