import axios from 'axios'

const api = axios.create({ baseURL: 'http://localhost:4100' })

export const registerApi = async (userData: any) => {
    return await api.post('/register', userData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const loginApi = async (userData: any) => {
    return await api.post('/login', userData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}