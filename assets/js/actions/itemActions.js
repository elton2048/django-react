import { createAction } from 'redux-actions'

export const CREATE_ITEM = 'CREATE_ITEM'
export const CHANGE_ITEM = 'CHANGE_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'

// export const createItem = createAction('CREATE_ITEM')
// export const deleteItem = createAction('DELETE_ITEM')
let nextItemId = 0
export const addItem = () => ({
    type: CREATE_ITEM,
    id: nextItemId++
})

export const changeItem = (id, text) => ({
    type: CHANGE_ITEM,
    id,
    text
})

export const deleteItem = (id) => ({
    type: DELETE_ITEM,
    id
})
