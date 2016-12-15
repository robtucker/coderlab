import { s4 } from "../core"
 
export const SHOW_NOTIFICATION = "SHOW_NOTIFICATION";
export const HIDE_NOTIFICATION = "HIDE_NOTIFICATION";

export const showNotification = (status, text) => ({id: s4(), status, text, type: SHOW_NOTIFICATION})

export const hideNotification = (id) => ({id, type: HIDE_NOTIFICATION})