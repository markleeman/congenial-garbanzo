export class User {
    email: string;
    password: string;

    constructor() {
        // Nothing to do here
    }

    basicUser() {
        this.email = process.env.BASIC_USERNAME;
        this.password = process.env.BASIC_PASSWORD;
    }
}