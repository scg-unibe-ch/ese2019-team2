import {Injectable} from '@angular/core';
import {User} from '../../models/user';
import {map} from 'rxjs/operators';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    currentUser: User;

    constructor(private http: HttpClient) {
    }

    login(username: string, password: string) {
        return this.http.post<any>('http://localhost:3000/users/login', {username, password}, {observe: 'response'})
            .pipe(map(data => {
                if (data.status === 200 && data.body.username) {
                    this.currentUser = this.generateUserFromJSON(data.body);
                    localStorage.setItem('sessionToken', JSON.stringify(this.currentUser.id));
                    return this.currentUser;
                }
            }));
    }

    logout(){
        localStorage.removeItem('sessionToken');
    }

    generateUserFromJSON(data): User {
        return new User(data.uuid, data.username, data.token);
    }

    isLoggedIn(): boolean {
        return Boolean(localStorage.getItem('sessionToken'));
    }
}
