export class User {
    id: number;
    token: string;
    username: string;
    constructor(id, token, username) {
        this.id = id;
        this.token = token;
        this.username = username;
    }
}
