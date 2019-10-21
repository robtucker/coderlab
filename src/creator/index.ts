import { injectReducer } from "../store";

export const CreatorRoutes = (store) => ({
    path: '/create/:courseName',
    getComponent(nextState, cb) {
        require.ensure([],(require) => {

            const CreatorContainer = require('./creator.container').CreatorContainer;
            const reducer = require('./creator.reducer').creatorReducer;

            injectReducer(store, { key: 'creator', reducer });

            cb(null, CreatorContainer)
        })
    }
})
