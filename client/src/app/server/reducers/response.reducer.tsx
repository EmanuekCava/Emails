import { ERROR_CREATE, ERROR_LOGIN, ERROR_REGISTER } from "../constants/response.const";

import { IAction } from "../../interface/Reducer";
import { IReducerResponse } from "../../interface/Response";

import { initialResponse } from "../values/response.value";

const responseReducer = (state: IReducerResponse = initialResponse, action: IAction): IReducerResponse | any => {
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