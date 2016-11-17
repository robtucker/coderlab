import React from "react";

import { injectReducer } from "../../store";

export const CoursesRoutes = (store) => ({
    path : 'courses',
    getComponent (nextState, cb) {
        require.ensure([], (require) => {

            const CoursesContainer = require('./courses.container').CoursesContainer
            const reducer = require('./courses.store').coursesReducer

            injectReducer(store, { key: 'courses', reducer })

            cb(null, CoursesContainer)

        })
    },
    getIndexRoute(partialNextState, cb) {

        require.ensure([], (require) => {

            cb(null, {
                component: require('./components/menu').Menu,
            });
        })
    },
    getChildRoutes(partialNextState, cb) {
        require.ensure([], (require) => {

            cb(null, [
                {
                    path: "web",
                    component: require('./components/web').Web
                },
                {
                    path: "game",
                    component: require('./components/game').Game
                },
                {
                    path: "node",
                    component: require('./components/node').Node
                },
                {
                    path: "python",
                    component: require('./components/python').Python
                },
                {
                    path: "advanced",
                    component: require('./components/advanced').Advanced
                },
                {
                    path: "teacher",
                    component: require('./components/teacher').Teacher
                }
            ])
        })
    }
});
