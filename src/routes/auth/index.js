import { AuthContainer } from "./auth.container";
import { guestMiddleware } from "../../middleware";


export const LoginRoute = {
    path: '/login',
    component: AuthContainer,
    onEnter: guestMiddleware()
};

export const RegisterRoute = {
    path: '/register',
    component: AuthContainer,
    onEnter: guestMiddleware()
};
