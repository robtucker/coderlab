
let initialState = [
    {
        id: 0,
        name: "Javascript"
    },
    {
        id: 1,
        name: "Python"
    }
];

export const coursesReducer = (state = initialState, action) => {

    switch (action.type) {
    case "ADD_COURSE":
        return [...state, {
            id: action.id,
            name: action.name    
        }];
    default:
        return state;
    }
};
