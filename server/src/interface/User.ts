import { Document } from "mongoose";

export interface IUser extends Document {
    name: string;
    surname: string;
    email: string;
    birth: string;
    gender: string;
    country: string;
    password: string;
}