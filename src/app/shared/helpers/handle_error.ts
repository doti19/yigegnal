import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

 //Error
 export function handleError(error: HttpErrorResponse){
    let msg = '';
    if(error.error instanceof ErrorEvent){
      //client side error
      msg = error.error.message;
    }else{
      //server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log('error: '+ msg);
    return throwError(msg);
  }

