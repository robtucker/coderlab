import React from "react";

import { injectReducer } from "../../store";

export const CoursesRoutes = (store) => ({
    path : 'courses',
    getComponent (nextState, cb) {
        require.ensure([], (require) => {

            const CoursesContainer = require('./containers/courses.container').CoursesContainer
            const reducer = require('./courses.store').coursesReducer

            injectReducer(store, { key: 'courses', reducer })

            cb(null, CoursesContainer)

        })
    },
    getIndexRoute(partialNextState, cb) {

        require.ensure([], (require) => {

            cb(null, {
                component: require('./components/course-menu').CourseMenu,
            });
        })
    },
    getChildRoutes(partialNextState, cb) {
        require.ensure([], (require) => {

            cb(null, [
                {
                    path: ":name",
                    component: require('./containers/course-summary.container').CourseSummaryContainer
                }
            ])
        })
    }
});
