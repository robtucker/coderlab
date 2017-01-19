export const SHOW_SNACKBAR = "SHOW_SNACKBAR";
export const HIDE_SNACKBAR = "HIDE_SNACKBAR";

export const showSnackbar = (message) => ({message, type: SHOW_SNACKBAR});
export const hideSnackbar = (id) => ({id, type: HIDE_SNACKBAR});