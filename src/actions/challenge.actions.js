import { map, property } from "lodash";

export const START_CHALLENGE = "START_CHALLENGE";
export const TOGGLE_VIDEO = "TOGGLE_VIDEO";
export const TOGGLE_CHALLENGE_SIDEBAR = "TOGGLE_SIDEBAR";
export const UPDATE_CHALLENGE_FILE = "UPDATE_CHALLENGE_FILE";
export const SET_VISIBLE_FILE = "SET_VISIBLE_FILE";
export const SUBMIT_CHALLENGE = "SUBMIT_CHALLENGE";
export const SET_CHALLENGE_DISPLAY = "SET_CHALLENGE_DISPLAY";
export const COMPLETE_CHALLENGE = "COMPLETE_CHALLENGE";
export const SHOW_TASK_HINT = "SHOW_TASK_HINT";
export const HIDE_TASK_HINT = "SHOW_TASK_HINT";

export const toggleVideo = () => {
    //console.log('toggling video');
    return {type: TOGGLE_VIDEO}
};

export const toggleChallengeSidebar = () => ({type: TOGGLE_CHALLENGE_SIDEBAR});

export const startChallenge = (challenge) => {
    return {challenge, type: START_CHALLENGE};
}

export const updateChallengeFile = (name, doc) => ({name, doc, type: UPDATE_CHALLENGE_FILE})

export const setVisibleFile = (value) => ({value, type: SET_VISIBLE_FILE});

export const submitChallenge = (challenge) => {

    return {challenge, type: SUBMIT_CHALLENGE}
}

export const setChallengeDisplay = (value) => ({value, type: SET_CHALLENGE_DISPLAY});

export const completeChallenge = (challenge) => ({challenge, type: COMPLETE_CHALLENGE});

export const showTaskHint = (hint) => ({hint, type: SHOW_TASK_HINT});

export const hideTaskHint = (task, hint) => ({hint, type: HIDE_TASK_HINT});
