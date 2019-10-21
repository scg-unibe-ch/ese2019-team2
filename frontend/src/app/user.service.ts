import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  registerUser(lastName, firstName, email, username, password) {
    const user = {
      lastName,
      firstName,
      email,
      username,
      password
    };
    return this.http.post(`${this.uri}/users/register`, user);
  }

  loginUser(id, password) {
    return this.http.get(`${this.uri}/users/login/${id}/${password}`);
  }
}
