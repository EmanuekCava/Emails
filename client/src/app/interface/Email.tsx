import { IUser } from "./User";

export interface IReducerEmail {
    messagesObtained: IMessage[];
    emailsObtained?: () => void;
    emailsSent?: () => void;
    getEmailAction?: (id: string) => void;
    createEmail?: (emailData: IMessageData, setIsNewEmail: (isNewEmail: boolean) => void, setIsEmailsSent: (isEmailSent: boolean) => void) => void;
    removeEmail?: (id: string, setIsEmailsSent: (isEmailsSent: boolean) => void, setIsGetEmail: (isGetEmail: boolean) => void) => void;
    receiveEmail?: (data: IMessage) => void;
    messagesSent: IMessage[];
    message: IMessage;
}

export interface IMessage {
    _id?: string;
    subject?: string;
    description?: string;
    to?: IUser;
    from?: IUser;
    createdAt?: string;
    updatedAt?: string;
}

export interface IMessageData {
    subject: string;
    description: string;
    to: string;
}
