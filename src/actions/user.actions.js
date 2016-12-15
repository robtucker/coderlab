import { UserApi } from "../api";

let api = new UserApi();

export const getMe = (data) => {

    return (dispatch) => {
        api.get('me');
    }

}

export const putMe = (data) => {

    return (dispatch) => {
        api.put('me', data);
    }

}

