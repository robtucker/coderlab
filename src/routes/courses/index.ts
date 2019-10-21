import React from "react";

import { injectReducer } from "../../store";

import { CourseIndexContainer } from './containers/course-index.container';

export const CourseRoutes = (store) => {

    const editorReducer = require('./editor.reducer').reducer
    const challengeReducer = require('./challenge.reducer').reducer

    injectReducer(store, { key: 'challenge', reducer: challengeReducer });
    injectReducer(store, { key: 'editor', reducer: editorReducer});

    return [
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
            path: "/courses/:name/booking",
            getComponent(nextState, cb) {
                require.ensure([], (require) => {
                    let CourseBookingContainer = require('./containers/course-booking.container').CourseBookingContainer
                    cb(null, CourseBookingContainer);
                })
            }
        },
        {
            path: 'courses/:courseName/level/:levelIndex/:challengeIndex',
            getComponent(nextState, cb) {
                require.ensure([], (require) => {
                    let ChallengeContainer = require('./containers/challenge.container').ChallengeContainer
                    cb(null, ChallengeContainer);
                })
            }
        }
    ]
};


