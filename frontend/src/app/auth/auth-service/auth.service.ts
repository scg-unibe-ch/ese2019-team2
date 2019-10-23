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
                const userInformation = (data.body.userInformation);
                const token = data.body.token; 
                const expirationTime = data.body.expiresIn;
                if (data.status === 200 && userInformation.username){
                    this.currentUser = this.generateUserFromJSON(userInformation, token);
                    localStorage.setItem('sessionToken', this.currentUser.token);
                    localStorage.setItem('expiration', expirationTime)
                    return this.currentUser;
                }
            }));
    }

    logout(){
        this.removeItems();
        this.router.navigate(['/']);
    }

    register(lastname: string, firstname: string, email: string, username: string, password: string) {
        return this.http.post<any>('http://localhost:3000/users/register', {lastname, firstname, email, username, password}, {observe: 'response'})
            .pipe(map(data => {
                const userInformation = (data.body.userInformation);
                const token = data.body.token;
                const expirationTime = data.body.expiresIn;
                if (data.status === 201 && userInformation.username){
                    this.currentUser = this.generateUserFromJSON(userInformation, token);
                    localStorage.setItem('sessionToken', this.currentUser.token);
                    localStorage.setItem('expiration', expirationTime)
                    return this.currentUser;
                }
            }));
    }

    generateUserFromJSON(data, token): User {
       return new User(data._id, token, data.username, data.firstName);
    }

    isLoggedIn(): boolean {
        if (!Boolean(localStorage.getItem('sessionToken'))) return false;
        const dateNow: number = Math.floor(Date.now()/1000);
        const expiration: number = parseInt(localStorage.getItem('expiration'));
        const expired = expiration - dateNow < 0;
        if (expired) {
            this.removeItems();
        }
        return (!expired);
    }

    displayPopover(): boolean {
        const result = this.surpressPopover;
        this.surpressPopover = true;
        return result;
    }

    removeItems(){
        localStorage.removeItem('sessionToken');
        localStorage.removeItem('expiration');
    }

}
