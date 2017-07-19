import React from 'react'
import App from './app'

import FormItem from './item'

class AppList extends React.Component {

    constructor(props) {
        super()
        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        const numbers = props.numbers

        this.state = {
            numbers: numbers
        }
    }

    addItem() {
        this.props.numbers.push("")
        this.setState({
            numbers: this.props.numbers
        })
    }

    deleteItem(index) {
        // e.preventDefault()
        console.log(this.props);
        this.props.numbers.splice(index, 1)
        this.setState({
            numbers: this.props.numbers
        })
    }

    render() {
        // return <div>{this.state.name}</div>
        const name = this.state.numbers.map((number, index) =>
            <FormItem key={ index } name={ number } id={ index } handler={ this.deleteItem } />
        )
        return (
            <div>
                <fieldset>
                    <button onClick={ () => { this.addItem() }} id={`test`} className="btn" type="button">Add</button>
                </fieldset>
                {name}
            </div>
        )
    }
}

module.exports = AppList;
