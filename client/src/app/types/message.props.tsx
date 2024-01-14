export type CreateTypeProps = {
    setIsNewEmail: (isNewEmail: boolean) => void;
    setIsEmailsSent: (isEmailsSent: boolean) => void;
}

export type GetEmailTypeProps = {
    idEmail: string;
    setIsGetEmail: (isGetEmail: boolean) => void;
    setIsEmailsSent: (isEmailsSent: boolean) => void;
}

export type MailTypeProps = {
    email: any;
    isEmailReceived: boolean;
    isEmailsSent: boolean;
    setIsGetEmail: (isGetEmail: boolean) => void;
    setIsNewEmail: (isNewEmail: boolean) => void;
    setIsEmailReceived: (isEmailReceived: boolean) => void;
    setIsEmailsSent: (isEmailsSent: boolean) => void;
    setIdEmail: (idEmail: string) => void;
}

export type ActionsTypeProps = {
    setIsEmailReceived: (isEmailReceived: boolean) => void;
    setIsNewEmail: (isEmailReceived: boolean) => void;
    setIsEmailsSent: (isEmailReceived: boolean) => void;
    setIsGetEmail: (isGetEmail: boolean) => void;
    isEmailReceived: boolean;
    isNewEmail: boolean;
    isEmailsSent: boolean;
}

export type MailsTypeProps = {
    messagesObtained: any[];
    messagesSent: any[];
    isEmailReceived: boolean; 
    isNewEmail: boolean; 
    isEmailsSent: boolean; 
    isGetEmail: boolean; 
    setIsEmailReceived: (isEmailReceived: boolean) => void; 
    setIsNewEmail: (iisNewEmail: boolean) => void;  
    setIsEmailsSent: (isEmailsSent: boolean) => void; 
    setIsGetEmail: (isGetEmail: boolean) => void; 
}