import React from 'react'

import Label from './label'
import CompositeLegend from './legend'

class App extends React.Component {

    deleteClick() {
        console.log(`this is`, this);
        // console.log(this.props.id);
        this.props.handler(this.props.id)
    }

    render() {
        return (
            <fieldset name={`app${ this.props.id }`}>
                <CompositeLegend id={ this.props.id } action={ this.props.handler } />
                <Label label="Name" />
                <div id={`test${this.props.name}`} className="row" key={ this.props.name }>
                    Hello, world. { this.props.name }
                </div>
            </fieldset>
        )
    }
}

// module.exports = App
export default App
