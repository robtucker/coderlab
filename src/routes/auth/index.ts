import { LoginContainer } from "./login.container";
import { RegisterContainer } from "./register.container";
import { guestMiddleware } from "../../common/middleware/auth.middleware";


export const LoginRoute = {
    path: '/login',
    component: LoginContainer,
    onEnter: guestMiddleware()
};

export const RegisterRoute = {
    path: '/register',
    component: RegisterContainer,
    onEnter: guestMiddleware()
};
