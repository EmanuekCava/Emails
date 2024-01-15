import { is_auth_storage, user_storage } from "../../config/config";
import { IAction } from "../../interface/Reducer";
import { IReducerUser } from "../../interface/User";

import { AUTH, LOGOUT } from "../constants/user.const";

import { initialUser } from "../values/user.value"

const userReducer = (state: IReducerUser = initialUser, action: IAction): IReducerUser | any => {

    switch (action.type) {
        case AUTH:
            localStorage.setItem(`${is_auth_storage}`, JSON.stringify("true"))
            localStorage.setItem(`${user_storage}`, JSON.stringify(action.payload))
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true
            }

        case LOGOUT:
            localStorage.removeItem(`${is_auth_storage}`)
            localStorage.removeItem(`${user_storage}`)
            return {
                ...state,
                user: {},
                isLoggedIn: action.payload
            }
    
        default:
            return state;
    }

}

export default userReducer