import { AuthContainer } from "./auth.container";

export const LoginRoute = {
    path: '/login',
    component: AuthContainer,
};

export const RegisterRoute = {
    path: '/register',
    component: AuthContainer,
};
