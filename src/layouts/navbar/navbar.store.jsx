
export const TOGGLE_NAVBAR = "TOGGLE_NAVBAR";


let initialState = {
    isVisible: true,
    sidenavOpen: false
}

export const navbarReducer = (state = initialState, action) => {

    switch (action.type) {
    case TOGGLE_NAVBAR:
        console.log('toggling nav');
        return Object.assign({}, state, {sidenavOpen: !state.sidenavOpen})
    default: 
        return state;
    }

};