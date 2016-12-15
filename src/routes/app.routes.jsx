import { store } from "../store";

import { guestMiddleware } from "../middleware";

import { AppLayout } from "../components";
import { LoginRoute, RegisterRoute } from "./auth";
import { LandingContainer } from "./landing";
import { HomeRoutes } from "./home";
import { ContactRoutes } from "./contact";
import { MentorsRoutes } from "./mentors";
import { CourseRoutes }  from "./courses";
import { AbortRoutes } from "./abort";

export const AppRoutes = [
    {
        path        : '/',
        component   : AppLayout,
        indexRoute  : { component: LandingContainer, onEnter: guestMiddleware()},
        childRoutes : [
            // sync routes (should be as few as poss)
            LoginRoute,
            RegisterRoute,
            AbortRoutes,

            // async routes
            HomeRoutes(store),
            ...CourseRoutes(store),
            MentorsRoutes(store),
            ContactRoutes(store),
            
        ]
    }
];
