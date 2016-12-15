import { CourseApi } from "../api";

let api = new CourseApi();

// async actions
export const startCourse = (course) => {
    return (dispatch) => {
        
        let data = { id: course.id };

        let req = api.put('course', null, );

        req.then((res => { 
            browserHistory.push('/home')
        }));
        
    }
};
