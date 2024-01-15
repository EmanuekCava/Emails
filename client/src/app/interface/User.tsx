import { IMessage } from "./Email";

export interface IReducerUser {
    isLoggedIn: boolean;
    user: IUserState;
    register?: (userData: IUserRegister) => void;
    login?: (userData: IUserLogin) => void;
    logout?: () => void;
}

export interface IUserState {
    user?: IUser;
    token?: string;
}

export interface IUser {
    _id: string;
    name: string;
    surname: string;
    email: string;
    received: IMessage[];
    send: IMessage[];
    password: string;
    gender: string;
    birth: string;
    country: string;
    createdAt: string;
    updatedAt: string;
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