import { CREATE_MESSAGE, DELETE_MESSAGE, GET_MESSAGE, MESSAGES_OBTAINED, MESSAGES_SENT } from "../constants/email.const";

import { initialStateEmail } from "../../types/email.props"

import { action } from "../../types/reducer.props"
import { initialEmail } from "../values/email.value"

const emailReducer = (state: initialStateEmail = initialEmail, action: action) => {
    switch (action.type) {
        case MESSAGES_OBTAINED:
            return {
                ...state,
                messagesObtained: action.payload,
            }

        case MESSAGES_SENT:
            return {
                ...state,
                messagesSent: action.payload
            }

        case GET_MESSAGE:
            return {
                ...state,
                message: action.payload
            }

        case CREATE_MESSAGE:
            return {
                ...state,
                messagesSent: [...state.messagesSent, action.payload]
            }

        case DELETE_MESSAGE:
            return {
                ...state,
                messagesSent: state.messagesSent.filter((msg: any) => msg._id !== action.payload)
            }

        default:
            return state;
    }
}

export default emailReducer