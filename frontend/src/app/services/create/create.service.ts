import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../auth/auth-service/auth.service';
import {Router} from '@angular/router';
import {RequestService} from '../request/request.service';

interface User {
    _id: string;
    lastname: string;
    firstname: string;
    email: string;
    username: string;
    password: string;
    role: string;
}

// @ts-ignore
@Injectable({
    providedIn: 'root'
})
export class CreateService {

    constructor(private request: RequestService, private http: HttpClient, private auth: AuthService, private router: Router) {
    }

    getUserID() {
        const CurrentUserName = this.auth.getUsername();
        return this.request.getAsJson<User>(`http://localhost:3000/users/${CurrentUserName}`);
    }

    // tslint:disable-next-line:max-line-length
    createNewService(category: string, subCategory: string, userID: string, username: string, serviceName: string, img: string[], price: number, maxPeople: number, location: string, street: string, city: string, zip: number, description: string, rating: number) {
        const service = {
            category,
            subCategory,
            userID,
            username,
            serviceName,
            img,
            price,
            maxPeople,
            location,
            street,
            city,
            zip,
            description,
            rating
        };
        return this.http.post<any>('http://localhost:3000/services/add', service);
    }

    linkToNewService(serviceID: string) {
        this.router.navigate([`http://localhost:3000/services/detail/${serviceID}`]);
    }
}
