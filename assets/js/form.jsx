import React, { Component } from 'react'
import DjangoCSRFToken from 'django-react-csrftoken'

import UploadComponent from './uploadComponent'
import AppList from './AppList'

class Form extends Component {
    render() {
        return (
            <form className="form-horizontal container" method="post" encType="multipart/form-data">
                <DjangoCSRFToken />
                <AppList numbers={ test.list } />
                <input id="submit-id-submit" className={`btn btn-primary pull-right`} name={`Submit`} value={`Save`} type={`submit`} />
            </form>
        )
    }
}

export default Form
