import { is_auth_storage } from "../config/config"

export const isStorage = (): boolean => {
    
    const isLoggedIn = JSON.parse(localStorage.getItem(`${is_auth_storage}`) as string)

    const boolIsLoggedIn = Boolean(isLoggedIn)

    return boolIsLoggedIn


}