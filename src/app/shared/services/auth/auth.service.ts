import { Injectable } from '@angular/core';
import {User} from '../../models/user';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import {Router} from '@angular/router';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endPoint: string = `${environment.apiUrl}`;
  headers = environment.headers;
  currentUser = {};
  role = '';
  redirect = '';


  constructor(private http: HttpClient, public router: Router) { }

  // Sign up
  signUp(user: User): Observable<any>{
    let api = `${this.endPoint}/auth/register`;
    return this.http.post(api, user).pipe(catchError(this.handleError));
  }

  //Sign in
  signIn(user: User){
    return this.http
      .post<any>(`${this.endPoint}/auth/login`, user)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.tokens.access.token);

        this.getUserProfile(res.user.id).subscribe((res)=>{
          // console.log('auth-service'  + res.user.id);
          this.currentUser = res;
          this.role = res.role;
          console.log('hellow' + this.role);
           
          if(this.role == 'super_admin'){
            this.redirect = 'super-admin';
            sessionStorage.setItem("user", this.role);

          } else if(this.role == 'admin'){
            this.redirect = 'admin';
            sessionStorage.setItem("user", this.role);

          } else if(this.role == 'db_analysist'){
            this.redirect = 'db-analysist';
            sessionStorage.setItem("user", this.role);

          } else if(this.role=='delivery'){
            this.redirect='delivery';
            sessionStorage.setItem("user", this.role);
          } else{
            this.router.navigate(['log-in']);
            
          }

            this.router.navigate([`/dashboard`]);
        });
      });
  }

  getToken(){
    return localStorage.getItem('access_token');
  }
  removeToken(){
    return localStorage.removeItem('access_token');
  }

  get isLoggedIn(): boolean{
    let authToken = this.getToken();
    return authToken !==null? true: false;
  }

  doLogout(){
    let removeToken = this.removeToken();
    if(removeToken == null){
      this.router.navigate(['log-in']);
    }
  }

  getUserProfile(id: any): Observable<any>{
    let api = `${this.endPoint}/users/${id}`;
    return this.http.get(api, {headers: this.headers}).pipe(
      map((res)=>{
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  //Error
  handleError(error: HttpErrorResponse){
    let msg = '';
    if(error.error instanceof ErrorEvent){
      //client side error
      msg = error.error.message;
    }else{
      //server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

}
