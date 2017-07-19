import React, { createElement } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import AppList from './AppList'
import Form from './form'

import { createStore } from 'redux'
import uploadApp from './reducers'
import { addItem, deleteItem } from './actions'
import '../styles/main.scss'

import 'bootstrap/dist/css/bootstrap.css'
// import UploadComponent from './uploadComponent'

let store = createStore(uploadApp)
let unsubscribe = store.subscribe(() => console.log(store.getState()))
console.log(store.getState());
store.dispatch(addItem())
store.dispatch(addItem())
store.dispatch(addItem())
store.dispatch(addItem())
// store.dispatch(deleteItem(2))

const element = createElement(AppList, {numbers: test.list})
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('react-app')
)
