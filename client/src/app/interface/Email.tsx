export interface IReducerEmail {
    messagesObtained: any[];
    emailsObtained?: () => void;
    emailsSent?: () => void;
    getEmailAction?: (id: string) => void;
    createEmail?: (emailData: any, setIsNewEmail: (isNewEmail: boolean) => void, setIsEmailsSent: (isEmailSent: boolean) => void) => void;
    removeEmail?: (id: string, setIsEmailsSent: (isEmailsSent: boolean) => void, setIsGetEmail: (isGetEmail: boolean) => void) => void;
    messagesSent: any[];
    message: any;
}

export interface IMessage {
    _id: string;
    createdAt: string;
    updatedAt: string;
}

export interface IMessageData {
    subject: string;
    description: string;
    to: string;
}
