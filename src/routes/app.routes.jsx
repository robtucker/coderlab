import { store } from "../store";

import { CoreLayout } from "../layouts";
import { HomeContainer } from "./home";
import { ContactRoutes } from "./contact";
import { MentorsRoutes } from "./mentors";
import { CoursesRoutes }  from "./courses";
import { AbortRoutes } from "./abort";

export const AppRoutes = {
    path        : '/',
    component   : CoreLayout,
    indexRoute  : { component: HomeContainer },
    childRoutes : [
        // async routes must add their reducers into the store when they are loaded
        CoursesRoutes(store),
        MentorsRoutes(store),
        ContactRoutes,
        AbortRoutes
    ]
};
