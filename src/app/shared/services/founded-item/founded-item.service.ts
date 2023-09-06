import { Injectable } from '@angular/core';
import {FoundedItem} from '../../models/founded_item/founded_item';
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
import { GetFoundItems } from 'app/shared/response-interfaces/get-found-items';
@Injectable({
  providedIn: 'root'
})
export class FoundedItemService {
  endPoint: string = `${environment.apiUrl}/founded-item`;
  headers = environment.headers;
  constructor(private http: HttpClient, public router: Router) { }

  //create founded item
  createFoundedItem(foundedItem: FoundedItem): Observable<any>{
    let api = this.endPoint;
    
    // return this.http.get(this.endPoint);
    return this.http.post(this.endPoint, foundedItem).pipe(
      catchError(handleError)
      
    );

  }

  //get founded items
  getFoundedItems(){
    return this.http.get(this.endPoint);
  }

  getFoundedItemsPending(): Observable<GetFoundItems>{
    return this.http.get<GetFoundItems>(`${this.endPoint}/?status=Pending`);
  }

  getFoundedItemsDelivered(): Observable<GetFoundItems>{
    return this.http.get<GetFoundItems>(`${this.endPoint}/?status=Delivered`);
  }

  //get founded item by id
  getFoundedItem(id: any){
    let api = `${this.endPoint}/${id}`;
    return this.http.get(api, {
      headers: this.headers
    }).pipe(map((res:any)=>{
      return res || {}
    }),
    catchError(handleError));
  }

  //update Founded Item by id
  updateFoundedItem(id: any, data: any): Observable<any>{
    let api = `${this.endPoint}/${id}`;

    return this.http.patch(api, data,{ headers: this.headers})
    .pipe(
      catchError(handleError)
    );
  }

  //update founded item by status
  updateFoundedItemStatus(id: any, data: any): Observable<any>{
    let api = `${this.endPoint}/status/${id}`;
    return this.http.patch(api, data,{headers: this.headers})
    .pipe(
      catchError(handleError)
    );
  }
  //delete founded item
  deleteFounded(id: any): Observable<any>{
    let api = `${this.endPoint}/${id}`;
    return this.http.delete(api, {headers: this.headers}).pipe(catchError(handleError))
  }


}
