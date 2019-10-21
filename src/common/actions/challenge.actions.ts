import { map, property } from "lodash";
import {getAppStore} from "../../store";

export const START_CHALLENGE = "START_CHALLENGE";
export const TOGGLE_VIDEO = "TOGGLE_VIDEO";
export const TOGGLE_CHALLENGE_SIDEBAR = "TOGGLE_SIDEBAR";
export const UPDATE_CHALLENGE_FILE = "UPDATE_CHALLENGE_FILE";
export const SET_VISIBLE_FILE = "SET_VISIBLE_FILE";
export const SUBMIT_CHALLENGE = "SUBMIT_CHALLENGE";
export const UPDATE_CHALLENGE_DISPLAY = "UPDATE_CHALLENGE_DISPLAY";
export const SHOW_CHALLENGE_ERRORS = "SHOW_CHALLENGE_ERRORS";
export const COMPLETE_CHALLENGE = "COMPLETE_CHALLENGE";
export const CLOSE_COMPLETION_MODAL = "CLOSE_COMPLETION_MODAL";
export const SET_CURRENT_TASK = "SET_CURRENT_TASK";
export const NEXT_CHALLENGE = "NEXT_CHALLENGE";

export const toggleVideo = () => ({type: TOGGLE_VIDEO});

export const toggleChallengeSidebar = () => ({type: TOGGLE_CHALLENGE_SIDEBAR});

export const startChallenge = (challenge) => ({challenge, type: START_CHALLENGE});

export const updateChallengeFile = (id, doc) => ({id, doc, type: UPDATE_CHALLENGE_FILE});

export const updateChallengeDisplay = (value) => ({value, type: UPDATE_CHALLENGE_DISPLAY});

export const submitChallenge = (challenge) => ({challenge, type: SUBMIT_CHALLENGE});

export const setVisibleFile = (value) => ({value, type: SET_VISIBLE_FILE});

export const showChallengeErrors = (errors) => ({errors, type: SHOW_CHALLENGE_ERRORS});

export const completeChallenge = () => ({type: COMPLETE_CHALLENGE});

export const closeCompletionModal = () => ({type: CLOSE_COMPLETION_MODAL});

export const setCurrentTask = (value) => ({value, type: SET_CURRENT_TASK})

export const nextChallenge = (challenge) => ({challenge, type: NEXT_CHALLENGE});
