// remove the dedicated homepage for now 
//import { HomeContainer } from "./home.container";
import {LandingContainer} from "../landing/containers/landing.container";
import { authMiddleware } from "../../middleware";
import { injectReducer } from "../../store";

export const HomeRoutes = (store) => ({
    path: '/home',
    //onEnter: authMiddleware(store),
    component: LandingContainer
    // getComponent(nextState, cb) {
    //     require.ensure([],(require) => {

    //         const HomeContainer = require('./home.container').HomeContainer;
    //         const reducer = require('./home.reducer').homeReducer

    //         injectReducer(store, { key: 'home', reducer });

    //         cb(null, HomeContainer)
    //     })
    // }
})
