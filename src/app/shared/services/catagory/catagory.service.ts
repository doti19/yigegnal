import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Catagory } from 'app/shared/models/catagory';
import { Observable, catchError, map } from 'rxjs';
import { handleError } from 'app/shared/helpers/handle_error';

@Injectable({
  providedIn: 'root'
})
export class CatagoryService {
  endPoint: string = `${environment.apiUrl}/catagory`;
  headers = environment.headers;
  constructor(private http: HttpClient, public router: Router) { }

  createCatagory(catagory: Catagory): Observable<any>{
    return this.http.post(this.endPoint, catagory).pipe(
      catchError(handleError)
    );
  }

  getCatagories(): Observable<Catagory[]>{
   const hi =this.http.get<Catagory[]>(this.endPoint);
   return hi;
  }

  getCatagory(id: any){
    let api = `${this.endPoint}/${id}`;
    return this.http.get(api, {
      headers: this.headers
    }).pipe(map((res: any)=>{
      return res || {}
    }),
    catchError(handleError)
    );
  }

  updateCatagory(id: any, data: any): Observable<any>{
    let api = `${this.endPoint}/${id}`;
    return this.http.patch(api, data, {headers: this.headers})
    .pipe(
      catchError(handleError)
    );
  }

  deleteCatagory(id: any): Observable<any>{
    let api = `${this.endPoint}/${id}`;
    return this.http.delete(api, {headers: this.headers}).pipe(catchError(handleError))
  }


}
