import { Injectable } from '@angular/core';
import {Inquiry} from '../../models/inquiry/inquiry';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import {Router} from '@angular/router';
import { environment } from '../../../environments/environment';
import { handleError } from 'app/shared/helpers/handle_error';
import { GetInquiries } from 'app/shared/response-interfaces/get-inquiries';


@Injectable({
  providedIn: 'root'
})
export class InquiryService {
  endPoint: string = `${environment.apiUrl}/inquiry`;
  headers = environment.headers;
  constructor(private http: HttpClient, public router: Router) { }
  
  //create inquiry
  createInquiry(inquiry: Inquiry): Observable<Inquiry>{
    let api = this.endPoint;
    return  this.http.post<Inquiry>(api, inquiry).pipe(
      catchError(handleError)
    );
  }

  //get inquiries
  getInquiries(): Observable<GetInquiries>{
   
    return this.http.get<GetInquiries>(this.endPoint);
  }

  //get inquiry by id
  getInquiry(id: any): Observable<any>{
    let api = `${this.endPoint}/${id}`;
    return this.http.get(api, {
      headers: this.headers
    }).pipe(map((res:any)=>{
      return res || {}
    }),
    catchError(handleError));
  }
  //update inquiry by id
  updateInquiry(id: any, data: any): Observable<any>{
    let api = `${this.endPoint}/${id}`;
    return this.http.patch(api, data,{ headers: this.headers})
      .pipe(
        catchError(handleError)
      );
  }

  //update inquiry status
  updateInquiryStatus(id: any, data: any): Observable<any>{
    let api = `${this.endPoint}/status/${id}`;
    return this.http.patch(api, data,{headers: this.headers})
    .pipe(
      catchError(handleError)
    );
  }

  //delete inquiry
  deleteInquiry(id: any): Observable<any>{
    let api = `${this.endPoint}/${id}`;
    return this.http.delete(api, {headers: this.headers}).pipe(catchError(handleError))
  }
}
