import { injectReducer } from "../store";

export const AboutRoutes = (store) => ({
    path: '/about',
    getComponent(nextState, cb) {
        require.ensure([],(require) => {

            const AboutContainer = require('./about.container').AboutContainer;
            const reducer = require('./mentors.reducer').mentorsReducer

            injectReducer(store, { key: 'mentors', reducer });

            cb(null, AboutContainer)
        })
    }
})
