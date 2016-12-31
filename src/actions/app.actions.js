export const SCREEN_RESIZE = "SCREEN_RESIZE";
export const HIDE_FOOTER = "HIDE_FOOTER";
export const SHOW_FOOTER = "SHOW_FOOTER";

export const screenResize = (width, height) => ({width, height, type: SCREEN_RESIZE});

export const showFooter = () => ({type: SHOW_FOOTER})

export const hideFooter = () => ({type: HIDE_FOOTER})
