export class User {
    id: number;
    token: string;
    username: string;
    firstName: string;
    role: string;
    constructor(id: number, token: string, username: string, firstName: string, role: string) {
        this.id = id;
        this.token = token;
        this.username = username;
        this.firstName = firstName;
        this.role = role;
    }
}
