import React, { Component } from 'react'

import FineUploaderTraditional from 'fine-uploader-wrappers'
import Gallery from 'react-fine-uploader'

// ...or load this specific CSS file using a <link> tag in your document
import 'react-fine-uploader/gallery/gallery.css'

class UploadComponent extends Component {
    constructor() {
        super()
        console.log(options)
        options.callbacks = {
            onComplete: (id, name, response) => {
                this.props.uploaded(response.path)
                console.log(response)
            },
            onDeleteComplete: (id, xhr, isError) => {
                this.props.deleted()
            }
        }
        this.state = {
            uploader: new FineUploaderTraditional({
                options: {
                    chunking: {
                        enabled: true
                    },
                    deleteFile: {
                        enabled: true,
                        endpoint: '/uploads'
                    },
                    request: {
                        endpoint: '/uploads'
                    },
                    retry: {
                        enableAuto: true
                    }
                }
            }),

            newUploader: new FineUploaderTraditional({options})
        }
    }
    render() {
        return (
            <div>
                <Gallery uploader={ this.state.newUploader } />
            </div>

        )
    }
}

export default UploadComponent
