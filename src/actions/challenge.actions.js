import { map, property } from "lodash";

export const START_CHALLENGE = "START_CHALLENGE";
export const TOGGLE_VIDEO = "TOGGLE_VIDEO";
export const TOGGLE_CHALLENGE_SIDEBAR = "TOGGLE_SIDEBAR";
export const UPDATE_CHALLENGE_FILE = "UPDATE_CHALLENGE_FILE";
export const SET_VISIBLE_FILE = "SET_VISIBLE_FILE";
export const SUBMIT_CHALLENGE = "SUBMIT_CHALLENGE";
export const UPDATE_CHALLENGE_DISPLAY = "UPDATE_CHALLENGE_DISPLAY";
export const SHOW_CHALLENGE_ERRORS = "SHOW_CHALLENGE_ERRORS";
export const NEXT_CHALLENGE = "NEXT_CHALLENGE";
// export const SHOW_TASK_HINT = "SHOW_TASK_HINT";
// export const HIDE_TASK_HINT = "SHOW_TASK_HINT";

export const toggleVideo = () => ({type: TOGGLE_VIDEO});

export const toggleChallengeSidebar = () => ({type: TOGGLE_CHALLENGE_SIDEBAR});

export const startChallenge = (challenge) => {
    return {challenge, type: START_CHALLENGE};
}

export const updateChallengeFile = (name, doc) => ({name, doc, type: UPDATE_CHALLENGE_FILE})

export const updateChallengeDisplay = (value) => ({value, type: UPDATE_CHALLENGE_DISPLAY});

export const submitChallenge = (challenge) => {

    return {challenge, type: SUBMIT_CHALLENGE}
}

export const setVisibleFile = (value) => ({value, type: SET_VISIBLE_FILE});

export const showChallengeErrors = (errors) => ({errors, type: SHOW_CHALLENGE_ERRORS});

export const nextChallenge = (challenge) => ({challenge, type: COMPLETE_CHALLENGE});

