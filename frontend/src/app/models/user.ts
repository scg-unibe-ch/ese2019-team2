export class User {
    id: number;
    token: string;
    username: string;
    firstName: string;
    constructor(id: number, token: string, username: string, firstName: string) {
        this.id = id;
        this.token = token;
        this.username = username;
        this.firstName = firstName;
    }
}
