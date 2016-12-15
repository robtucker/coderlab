import { showNotification } from "./notification.actions";

export const CACHE_FAILURE = "CACHE_FAILURE";

export const cacheFailure = () => {
    return showNotification('error', "There was a problem loading the cache. Please refresh the page");
}