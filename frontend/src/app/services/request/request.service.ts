import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
   providedIn: 'root'
})
export class RequestService {

   constructor(private http: HttpClient) {

   }

   getAsJson<T>(path: string): Observable<T> {
      return this.http.get<T>(path);
   }
}
