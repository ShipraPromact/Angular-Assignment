import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../src/environments/environment';
import { Observable, Observer, throwError, BehaviorSubject } from 'rxjs';
import { userDetails } from '../shared/userDetailsAC.model';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
    myAppUrl: string
    constructor(private http: HttpClient) {
        this.myAppUrl = "https://strapi-test.promactinfo.com/";
    }

    addBanner(formData): Observable<userDetails> {
        console.log("daat"+ formData);
        return this.http.post<userDetails>(this.myAppUrl + 'auth/local/register', formData);
          
    }

    getPost(): Observable<any> {
        return this.http.get<any>(this.myAppUrl + '/posts'); 
    }

    getUserById(id): Observable<userDetails> {
        return this.http.get<userDetails>(this.myAppUrl + 'users/' + id);
    }

    editUser(formData): Observable<userDetails> {
        return this.http.put<userDetails>(this.myAppUrl + 'users/' + formData.id, formData, {
            headers: new HttpHeaders({
                'Accept': 'application/json'
            })
        })
            .pipe(
                retry(1),
                //catchError(this.errorHandler)
            );
    }

    deleteUser(id): Observable<userDetails> {
        return this.http.delete<userDetails>(this.myAppUrl + 'users/' + id);
    }

}
