import { MentorsContainer } from "./mentors.container";

import { injectReducer } from "../../store";

export const MentorsRoutes = (store) => ({
    path: '/mentors',
    getComponent(nextState, cb) {
        require.ensure([],(require) => {

            const MentorsContainer = require('./mentors.container').MentorsContainer;
            const reducer = require('./mentors.reducer').mentorsReducer

            injectReducer(store, { key: 'mentors', reducer });

            cb(null, MentorsContainer)
        })
    }
})
