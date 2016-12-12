import React from "react";

import { injectReducer } from "../../store";

import { CourseIndexContainer } from './containers/course-index.container';

import web from "./data/web";
import game from "./data/game";
import javascript from "./data/javascript";
import python from "./data/python";
import teacher from "./data/teacher";
import advanced from "./data/advanced";

export const coursesData = [web, game, javascript, python, teacher, advanced];

export const CourseIndexRoute = (store) => (
    {
        path : 'courses',
        component: CourseIndexContainer,
    }
);

export const CourseSummaryRoute = (store) => ({    
    path: "/courses/:name",
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            let CourseSummaryContainer = require('./containers/course-summary.container').CourseSummaryContainer
            cb(null, CourseSummaryContainer);
        })
    }
})

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
    }
]);


