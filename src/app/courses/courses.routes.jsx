import { CoursesContainer } from "./courses.container";

import CourseList from "./components/course-list";


export const CoursesRoutes = (store) => {
    
    return {
        path: '/courses',
        component: CoursesContainer,
    }
};
