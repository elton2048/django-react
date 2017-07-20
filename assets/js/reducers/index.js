import { combineReducers } from 'redux'
import uploadItems from './uploadItems'
import uiReducers from './uiReducers'

const uploadApp = combineReducers({
    uploadItems,
    uiReducers,
})

export default uploadApp
