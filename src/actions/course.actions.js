//import { CourseApi } from "../api/course-api";
import { getAppStore } from "../store";
import { find } from "lodash"

//let api = new CourseApi();

export const TOGGLE_ENROL_DIALOG = "TOGGLE_ENROL_DIALOG";
export const COURSE_NOT_FOUND = "COURSE_NOT_FOUND";
export const SET_COURSE_LEVEL = "SET_COURSE_LEVEL";

export const toggleEnrolDialog = () => ({type: TOGGLE_ENROL_DIALOG});

export const setCourseLevel = (courseName, course, levelIndex) => {
    return {courseName, course, levelIndex, type: SET_COURSE_LEVEL};
}

export const courseNotFound = (courseName, levelIndex) => ({courseName, levelIndex, type: COURSE_NOT_FOUND});
