import { store } from "../store";

import { CoreLayout } from "../layouts";
import { HomeContainer } from "./home";
import { ContactRoutes } from "./contact";
import { MentorsRoutes } from "./mentors";
import { CoursesRoutes }  from "./courses";
import { LearnRoutes } from "./learn";

export const AppRoutes = {
    path        : '/',
    component   : CoreLayout,
    indexRoute  : { component: HomeContainer },
    childRoutes : [
        // async routes must add their reducers into the store when they are loaded
        CoursesRoutes(store),
        LearnRoutes(store),
        MentorsRoutes,
        ContactRoutes
    ]
};
