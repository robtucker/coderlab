import { injectReducer } from "../../store";

export const LearnRoutes = (store) => ({
    path : 'learn',
    getComponent (nextState, cb) {
        require.ensure([], (require) => {

            const LearnContainer = require('./containers/learn').LearnContainer
            const reducer = require('./learn.store').learnReducer

            injectReducer(store, { key: 'learn', reducer })

            cb(null, LearnContainer)

        }, 'learn')
    }
});
