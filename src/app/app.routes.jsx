import { AppStore } from "./app.store";

import { CoursesRoutes }  from "./courses";
import { Home } from "./home";

export const AppRoutes = {
    path        : '/',
    indexRoute  : { component: Home },
    childRoutes : [
        // async routes must add their reducers into the store when they are loaded
        CoursesRoutes(AppStore)
    ]
};