import { AppStore } from "./app.store";

import { CoreLayout } from "./layouts";
import { Home } from "./home";
import { AboutRoutes } from "./about";

import { CoursesRoutes }  from "./courses";

export const AppRoutes = {
    path        : '/',
    component   : CoreLayout,
    indexRoute  : { component: Home },
    childRoutes : [
        // async routes must add their reducers into the store when they are loaded
        CoursesRoutes(AppStore),
        AboutRoutes
    ]
};