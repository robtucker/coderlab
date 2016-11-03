export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export const TOGGLE_NAVBAR = 'TOGGLE_NAVBAR';

export const incrementCounter = ()=> {
    return {
        type: INCREMENT_COUNTER,
        
    };
};

export const decrementCounter = ()=> {
    return {
        type: DECREMENT_COUNTER,
        
    };
};


export const toggleNavbar = ()=> {
    return {
        type: TOGGLE_NAVBAR
    };
}