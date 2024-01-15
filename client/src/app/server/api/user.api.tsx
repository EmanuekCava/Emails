import axios from 'axios'

import { IUserLogin, IUserRegister } from '../../interface/User'

import { host_dev, host_prod } from '../../config/config'

const api = axios.create({ baseURL: !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? `${host_dev}` : `${host_prod}` })

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