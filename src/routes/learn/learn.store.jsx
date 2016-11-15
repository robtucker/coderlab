let initialState = {
    currentStep: 0,
    steps: ['foo', 'bar', 'baz']
};

export const learnReducer = (state = initialState, action) => {

    switch (action.type) {
    case "NEXT_STEP":
        return [...state, {
            id: action.id,
            name: action.name    
        }];
    default:
        return state;
    }

};
