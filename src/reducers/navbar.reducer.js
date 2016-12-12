import { palette } from "../styles";

import {TOGGLE_NAVBAR, SET_NAVBAR_COLOR} from "../actions";

let initialState = {
    isVisible: true,
    sidenavOpen: false,
    backgroundColor: palette.primary1Color
}

export const navbar = (state = initialState, action) => {

    switch (action.type) {
    case TOGGLE_NAVBAR:
        return Object.assign({}, state, {sidenavOpen: !state.sidenavOpen});
    case SET_NAVBAR_COLOR:
        return Object.assign({}, state, {backgroundColor: action.color || palette.primary1Color});
    default: 
        return state;
    }

};