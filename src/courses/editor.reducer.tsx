import {SET_EDITOR_THEME} from "../common/actions";

let initialState = {
    theme: 'dracula'
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {

    case SET_EDITOR_THEME: 
        return Object.assign({}, state, {theme: action.value})

    default:
        return state;
    }
}