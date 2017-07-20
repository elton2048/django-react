import { INPUT_ADDSONG } from '../actions'
const initialState = {
    addSongInput: ""
}

const addSongInput = (state = initialState.addSongInput, action) => {
    switch (action.type) {
        case INPUT_ADDSONG:
            // Apply filtering for the input.
            let re = /^\d*$/
            if (re.test(action.text))
                return state = action.text
            else
                return state
        default:
            return state
    }
}

const uiReducers = (state = initialState, action) => {
    switch (action.type) {
        default:
            return {
                addSongInput: addSongInput(state.addSongInput, action),
            }
    }
}

export default uiReducers
