


export class User {

    _name: string;
    _email: string;
    _message: string;

    constructor(name:string,email:string,message:string) {

        this._name = name;
        this._email = email;
        this._message = message;
    }
}

export interface IUser {
    name: string;
    email: string;
}

export interface IUserForListUser extends IUser {
    id: number;
}

export interface IStatus{
    message:string
}

