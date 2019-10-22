import {Injectable} from '@angular/core';
import {User} from '../../models/user';
import {map} from 'rxjs/operators';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    currentUser: User;
    surpressPopover: boolean = false;

    constructor(private http: HttpClient, private router: Router) {
    }

    login(username: string, password: string) {
        return this.http.post<any>('http://localhost:3000/users/login', {username, password}, {observe: 'response'})
            .pipe(map(data => {
                if (data.status === 200 && data.body.username) {
                    this.currentUser = this.generateUserFromJSON(data.body);
                    localStorage.setItem('sessionToken', this.currentUser.token);
                    return this.currentUser;
                }
            }));
    }

    logout(){
        localStorage.removeItem('sessionToken');
        this.router.navigate(['/']);
    }

    register(lastname: string, firstname: string, email: string, username: string, password: string) {
        return this.http.post<any>('http://localhost:3000/users/register', {lastname, firstname, email, username, password}, {observe: 'response'})
            .pipe(map(data => {
                console.log(data.body);
                if (data.status === 201 && data.body.username) {
                    this.currentUser = this.generateUserFromJSON(data.body);
                    localStorage.setItem('sessionToken', this.currentUser.token);
                    return this.currentUser;
                }
            }));
    }

    generateUserFromJSON(data): User {
       return new User(data._id, "token", data.username);
    }

    isLoggedIn(): boolean {
        const result = Boolean(localStorage.getItem('sessionToken'));
        if (result) this.surpressPopover = true;
        return result;
    }

    displayPopover(): boolean {
        const result = this.surpressPopover;
        this.surpressPopover = true;
        return result;
    }

}
