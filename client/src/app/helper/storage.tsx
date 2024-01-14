export const isStorage = () => {
    
    const isLoggedIn = JSON.parse(localStorage.getItem('is-auth-data') as string)

    const boolIsLoggedIn = Boolean(isLoggedIn)

    return boolIsLoggedIn


}