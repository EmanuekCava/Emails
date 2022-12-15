import React, { createContext, useReducer } from 'react'
import { useNavigate } from "react-router-dom";

import { initialResponse } from '../values/response.value';
import { ERROR_LOGIN, ERROR_REGISTER } from '../constants/response.const';
import responseReducer from '../reducers/response.reducer';

import * as userApi from '../api/user.api'
import { AUTH, LOGOUT } from '../constants/user.const'
import userReducer from '../reducers/user.reducer'
import { initialUser } from '../values/user.value'

export const UserContext = createContext(initialUser)
export const ResponseContext = createContext(initialResponse)

export const UserContextGlobal = ({ children }: any) => {

    const navigate = useNavigate()

    const [state, dispatch] = useReducer(userReducer, initialUser)
    const [stateR, dispatchR] = useReducer(responseReducer, initialResponse)

    const login = async (userData: any) => {

        try {

            const { data } = await userApi.loginApi(userData)

            dispatch({
                type: AUTH,
                payload: data
            })

            navigate('/main')

        } catch (error: any) {
            dispatchR({
                type: ERROR_LOGIN,
                payload: error.response.data.message
            })
        }

    }

    const register = async (userData: any) => {

        try {

            const { data } = await userApi.registerApi(userData)

            dispatch({
                type: AUTH,
                payload: data
            })

            navigate('/main')

        } catch (error: any) {
            dispatchR({
                type: ERROR_REGISTER,
                payload: error.response.data.message
            })
        }

    }

    const logout = () => {

        try {

            dispatch({
                type: LOGOUT,
                payload: false
            })

            navigate('/')

        } catch (error) {
            throw error
        }

    }

    return (
        <ResponseContext.Provider value={stateR}>
            <UserContext.Provider value={{ ...state, login, register, logout } as any}>
                {children}
            </UserContext.Provider>
        </ResponseContext.Provider>
    )
}