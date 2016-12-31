import { CourseApi } from "../api";
import { startChallenge } from "./challenge.actions";
import { getAppStore } from "../store";
import { find } from "lodash"
let api = new CourseApi();

export const TOGGLE_ENROL_DIALOG = "TOGGLE_ENROL_DIALOG";

export const toggleEnrolDialog = () => ({type: TOGGLE_ENROL_DIALOG});

export const getCourseLevel = (courseName, levelId, challengeId = false) => {

    let req = api.get('/:course/:level', {course: courseName, level: levelId});

    req.then((res) => {

        //console.log ('received response, checking for challenge id', challengeId);
        if(challengeId) {
            let data = res.json();
            let challenge = find(data, c => c.id === challengeId);
            challenge.level = data;
            //console.log('initializing challenge', challenge);
            let store = getAppStore();
            store.dispatch(startChallenge(challenge));
        }

    });


}
