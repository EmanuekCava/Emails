import { ERROR_CREATE, ERROR_LOGIN, ERROR_REGISTER } from "../constants/response.const";

import { action } from "../../types/reducer.props"
import { initialStateResponse } from "../../types/response.props";
import { initialResponse } from "../values/response.value";

const responseReducer = (state: initialStateResponse = initialResponse, action: action) => {
    switch (action.type) {
        case ERROR_LOGIN:
            return {
                ...state,
                responseLogin: action.payload,
                responseRegister: "",
                responseCreate: "",
                successRemove: ""
            }

        case ERROR_REGISTER:
            return {
                ...state,
                responseLogin: "",
                responseRegister: action.payload,
                responseCreate: "",
                successRemove: ""
            }

        case ERROR_CREATE:
            return {
                ...state,
                responseLogin: "",
                responseRegister: "",
                responseCreate: action.payload,
                successRemove: ""
            }

        default:
            return state;
    }
}

export default responseReducer