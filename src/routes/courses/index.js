import React from "react";

import { injectReducer } from "../../store";

import { CourseIndexContainer } from './containers/course-index.container';

//export const coursesData = [web, game, javascript, python, teacher, advanced];

export const CourseRoutes = (store) => ([
    {
        path : 'courses',
        component: CourseIndexContainer,
    },
    {
        path: "/courses/:name",
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                let CourseSummaryContainer = require('./containers/course-summary.container').CourseSummaryContainer
                cb(null, CourseSummaryContainer);
            })
        }
    },
    {
        path: 'courses/:courseName/level/:levelId/:challengeId',
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                let ChallengeContainer = require('./containers/challenge.container').ChallengeContainer
                cb(null, ChallengeContainer);
            })
        }
    }
]);


