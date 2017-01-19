import { store } from "../store";

import { guestMiddleware } from "../middleware/auth.middleware";

import { AppContainer } from "../containers/app.container";
import { LoginRoute, RegisterRoute } from "./auth";
import { LandingContainer } from "./landing";

import { AbortRoutes } from "./abort";
import { ContactRoutes } from "./contact";
import { CourseRoutes }  from "./courses";
import { CreatorRoutes }  from "./creator";
import { HomeRoutes } from "./home";
import { MentorsRoutes } from "./mentors";
import { SettingsRoutes } from "./settings";


export const AppRoutes = [
    {
        path        : '/',
        component   : AppContainer,
        indexRoute  : { component: LandingContainer, onEnter: guestMiddleware()},
        childRoutes : [

            // sync routes (should be as few as poss)
            LoginRoute,
            RegisterRoute,
            AbortRoutes,

            // async routes
            ContactRoutes(store),
            ...CourseRoutes(store), // an array of routes
            CreatorRoutes(store),
            HomeRoutes(store),
            MentorsRoutes(store),
            SettingsRoutes(store),
            
        ]
    }
];