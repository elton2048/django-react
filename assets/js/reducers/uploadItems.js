import { handleActions } from 'redux-actions'
// import { normalize, schema } from 'normalizr'
import { CREATE_ITEM, CHANGE_ITEM, DELETE_ITEM } from '../actions'
import { SongItemState } from '../constants/models'

const uploadItems = handleActions({
    CREATE_ITEM: (state, action) => {
        let items = state.get('items').push(state.get('item').set('id', action.id))
        return state.set('items', items)
    },
    CHANGE_ITEM: (state, action) => {
        // console.log(action);
        let item = state.get('items').get(action.id).set('text', action.text)
        console.log(item);
        // return state
        return state.set('items', state.get('items').set(action.id, item))
    },
    DELETE_ITEM: (state, action) => {
        // return state.set('items', state.get('items').splice(action.id, 1))
        console.log(state.get('items').filter(item => item.get('id') != action.id));
        // return state.set('items', state.get('items').delete(action.id))
        return state.set('items', state.get('items').filter(item => item.get('id') != action.id))
        // let item = state.get('items').get('id', action.id)
    },
}, SongItemState)

const initialState = {
    uploadItems: []
}

// const uploadItems = (state = initialState.uploadItems, action) => {
//     switch (action.type) {
//         case CREATE_ITEM:
//             // return Object.assign({}, state, {})
//             return [
//                 ...state, {
//                     id: action.id,
//                     text: "",
//                 }
//             ]
//         case CHANGE_ITEM:
//             state[action.id].text = action.text
//             return state
//         case DELETE_ITEM:
//             // console.log([...state.slice(0, action.id), ...state.slice(action.id + 1)]);
//             // console.log(state.filter(element => element.id != action.id));
//             return state.filter(element => element.id != action.id)
//         default:
//             return state
//     }
// }

const items = (state = initialState, action) => {
    switch (action.types){
        default:
            return {
                uploadItems: uploadItems(state.uploadItems, action),
            }
    }
}

export default uploadItems
