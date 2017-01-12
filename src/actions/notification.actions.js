import { utils } from "../core"
 
export const SHOW_NOTIFICATION = "SHOW_NOTIFICATION";
export const HIDE_NOTIFICATION = "HIDE_NOTIFICATION";

export const showNotification = (status, text) => ({id: utils.shortKey(), status, text, type: SHOW_NOTIFICATION})

export const hideNotification = (id) => ({id, type: HIDE_NOTIFICATION})