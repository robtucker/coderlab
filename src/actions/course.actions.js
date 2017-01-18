import { CourseApi } from "../api";
import { startChallenge } from "./challenge.actions";
import { getAppStore } from "../store";
import { find } from "lodash"

let api = new CourseApi();

export const TOGGLE_ENROL_DIALOG = "TOGGLE_ENROL_DIALOG";
export const COURSE_NOT_FOUND = "COURSE_NOT_FOUND";
export const START_COURSE = "START_COURSE";
export const START_COURSE_LEVEL = "START_COURSE_LEVEL";

export const toggleEnrolDialog = () => ({type: TOGGLE_ENROL_DIALOG});

// this is also defined in user.actions ??
export const startCourse = (courseName, courseData) => ({courseName, course: courseData, type: START_COURSE});


export const startCourseLevel = (courseName, levelId, levelData) => {
    return {courseName, levelId, levelData, type: START_COURSE_LEVEL}  

}

export const courseNotFound = (courseName, levelId) => ({courseName, levelId, type: COURSE_NOT_FOUND});

/**
 * DEPRACATED - get course levels from the api
 * course levels are currently being loaded using webpack
 */
// export const getCourseLevel = (courseName, levelId, challengeId = false) => {
//     let req = api.get('/:course/:level', {course: courseName, level: levelId});
//     req.then((res) => {
//         console.log ('received response, checking for challenge id', res, challengeId);
//         if(challengeId) {
//             let data = res.json();
//             let challenge = find(data, c => c.id === challengeId);
//             challenge.level = data;
//             //console.log('initializing challenge', challenge);
//             let store = getAppStore();
//             store.dispatch(startChallenge(challenge));
//         }
//     });
// }

// export const getCourseSummary = (courseName) => {
//     if(state.courses[courseName]) return state.courses[nacourseNameme]
//     return api.get("/:course", {course: courseName});
// }