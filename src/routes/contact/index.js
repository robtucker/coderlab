import { ContactContainer } from "./contact.container";

import { injectReducer } from "../../store";

export const ContactRoutes = (store) => ({
    path: '/contact',
    getComponent(nextState, cb) {
        require.ensure([],(require) => {

            const ContactContainer = require('./contact.container').ContactContainer;
            const reducer = require('./contact.reducer').contactReducer

            injectReducer(store, { key: 'contact', reducer });

            cb(null, ContactContainer)
        })
    }
})
