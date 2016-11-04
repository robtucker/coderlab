let initialState = {
    title: "CoderLab",
    isVisible: true
}

export const navbarReducer = (state = initialState, action) => {

    switch (action.type) {
    case "TOGGLE_NAVBAR":
        console.log('toggling nav');
        return Object.assign({}, state, {isVisible: !state.isVisible})
    default: 
        return state;
    }

};