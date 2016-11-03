import { AboutContainer } from "./about.container";
import { About } from "./about.component";

console.log(AboutContainer);

export const AboutRoutes = {
    path: '/about',
    component: AboutContainer,
    indexRoute : { component: About }
};
