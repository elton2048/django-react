import { handleActions } from 'redux-actions'
// import { normalize, schema } from 'normalizr'
import { CREATE_ITEM, CHANGE_ITEM, DELETE_ITEM } from '../actions'

// const uploadItems = handleActions({
//     CREATE_ITEM: (state, { payload }) => {
//         return [
//             ...state
//         ]
//     },
//     DELETE_ITEM: (state, { payload }) => {
//         return [
//             ...state
//
//         ]
//     }
// })

const initialState = {
    uploadItems: []
}

const uploadItems = (state = initialState.uploadItems, action) => {
    switch (action.type) {
        case CREATE_ITEM:
            // return Object.assign({}, state, {})
            return [
                ...state, {
                    id: action.id,
                    text: "",
                }
            ]
        case CHANGE_ITEM:
            state[action.id].text = action.text
            return state
        case DELETE_ITEM:
            // console.log([...state.slice(0, action.id), ...state.slice(action.id + 1)]);
            // console.log(state.filter(element => element.id != action.id));
            return state.filter(element => element.id != action.id)
        default:
            return state
    }
}

const items = (state = initialState, action) => {
    switch (action.types){
        default:
            return {
                uploadItems: uploadItems(state.uploadItems, action),
            }
    }
}

export default items
