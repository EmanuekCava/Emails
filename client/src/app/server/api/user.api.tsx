import axios from 'axios'

import { IUserLogin, IUserRegister } from '../../interface/User'

const api = axios.create({ baseURL: 'http://localhost:4100' })

export const registerApi = async (userData: IUserRegister) => {
    return await api.post('/register', userData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const loginApi = async (userData: IUserLogin) => {
    return await api.post('/login', userData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}