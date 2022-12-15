import { Document } from "mongoose";

export interface IMessage extends Document {
    subject: string;
    description: string;
    to: string;
    from: string;
}