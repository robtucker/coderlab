import { store } from "../store";

import { CoreLayout } from "../layouts";
import { HomeContainer } from "./home";
import { AboutRoutes } from "./about";
import { CoursesRoutes }  from "./courses";

export const AppRoutes = {
    path        : '/',
    component   : CoreLayout,
    indexRoute  : { component: HomeContainer },
    childRoutes : [
        // async routes must add their reducers into the store when they are loaded
        CoursesRoutes(store),
        AboutRoutes
    ]
};