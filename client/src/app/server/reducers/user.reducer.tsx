import { IAction } from "../../interface/Reducer";
import { IReducerUser } from "../../interface/User";

import { AUTH, LOGOUT } from "../constants/user.const";

import { initialUser } from "../values/user.value"

const userReducer = (state: IReducerUser = initialUser, action: IAction): IReducerUser | any => {

    switch (action.type) {
        case AUTH:
            localStorage.setItem("is-auth-data", JSON.stringify("true"))
            localStorage.setItem("user", JSON.stringify(action.payload))
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true
            }

        case LOGOUT:
            localStorage.setItem("is-auth-data", JSON.stringify("false"))
            localStorage.removeItem("user")
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