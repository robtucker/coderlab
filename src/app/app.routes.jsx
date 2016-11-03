import { AppStore } from "./app.store";

import { CoreLayout } from "./layouts";
import { HomeContainer } from "./routes/home";
import { AboutRoutes } from "./routes/about";
import { CoursesRoutes }  from "./routes/courses";

export const AppRoutes = {
    path        : '/',
    component   : CoreLayout,
    indexRoute  : { component: HomeContainer },
    childRoutes : [
        // async routes must add their reducers into the store when they are loaded
        CoursesRoutes(AppStore),
        AboutRoutes
    ]
};