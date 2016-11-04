import { injectReducer } from "../../store";

export const CoursesRoutes = (store) => ({
    path : 'courses',
    getComponent (nextState, cb) {
        require.ensure([], (require) => {

            const CoursesContainer = require('./courses.container').CoursesContainer
            const reducer = require('./courses.store').coursesReducer

            injectReducer(store, { key: 'courses', reducer })

            cb(null, CoursesContainer)

        }, 'courses')
    }
});
