import { initialStateUser } from "../../types/auth.props";
import { action } from "../../types/reducer.props";

import { AUTH, LOGOUT } from "../constants/user.const";

import { initialUser } from "../values/user.value"

const userReducer = (state: initialStateUser = initialUser, action: action) => {

    var value = "true"

    switch (action.type) {
        case AUTH:
            localStorage.setItem("auth-data", action.payload.token)
            localStorage.setItem("is-auth-data", JSON.parse(value))
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true
            }

        case LOGOUT:
            localStorage.removeItem("auth-data")
            localStorage.removeItem("is-auth-data")
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