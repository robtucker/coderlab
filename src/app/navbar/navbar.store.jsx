let initialState = {
    isVisible: true
}

export const navbar = (state = initialState, action) => {

    switch (action.type) {
    case "TOGGLE_NAVBAR":
        return Object.assign({}, state, {isVisible: !state.isVisible})
    default: 
        return state;
    }

};