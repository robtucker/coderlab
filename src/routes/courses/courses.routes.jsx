import React from "react";

import { injectReducer } from "../../store";
import { CoursesContainer } from './containers/courses.container';
import { CourseIndex } from "./components/course-index";

export const CoursesRoutes = (store) => ({
    path : 'courses',
    component: CoursesContainer,
    indexRoute: {component: CourseIndex},
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
