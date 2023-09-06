import {Injectable} from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { AuthService } from '../services/auth/auth.service';
import { Observable, tap } from 'rxjs';
import { SpinnerService } from '../services/spinner.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private authService: AuthService, private spinnerService: SpinnerService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinnerService.show();
    const authToken = this.authService.getToken();
    req = req.clone({
        setHeaders: {
            Authorization: "Bearer " + authToken
        }
    });
    return next.handle(req).pipe(tap((event: HttpEvent<any>)=>{
        if(event instanceof HttpResponse){
            this.spinnerService.hide();
        }
    }, (error)=>{
        this.spinnerService.hide();
    }));
    }
}