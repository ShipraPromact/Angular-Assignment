import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../src/environments/environment';
import { Observable, Observer, throwError, BehaviorSubject } from 'rxjs';
import { userDetails } from '../shared/userDetailsAC.model';

@Injectable({
  providedIn: 'root'
})
export class TableListService {
    myAppUrl: string
    constructor(private http: HttpClient) {
        this.myAppUrl = environment.appUrl + '/auth/local/register/';
    }

    addBanner(formData): Observable<userDetails> {

        return this.http.post<userDetails>(this.myAppUrl + 'Banner/AddBannerDetails', formData)
          
    }
}
