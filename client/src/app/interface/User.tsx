export interface IReducerUser {
    isLoggedIn: boolean;
    user: any;
    register?: (userData: IUserRegister) => void;
    login?: (userData: IUserLogin) => void;
    logout?: () => void;
}

export interface IUserRegister {
    name: string;
    surname: string;
    email: string;
    birth: string;
    gender: string;
    country: string;
    password: string;
    confirm: string;
}

export interface IUserLogin {
    email: string;
    password: string;
}