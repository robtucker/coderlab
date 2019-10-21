import { HomeContainer } from "./home.container";
import { authMiddleware } from "../common/middleware/auth.middleware";
import { injectReducer } from "../store";

export const HomeRoutes = (store) => ({
    path: '/home',
    onEnter: authMiddleware(store),
    getComponent(nextState, cb) {
        require.ensure([],(require) => {

            const HomeContainer = require('./home.container').HomeContainer;
            const reducer = require('./home.reducer').homeReducer

            injectReducer(store, { key: 'home', reducer });

            cb(null, HomeContainer)
        })
    }
})
