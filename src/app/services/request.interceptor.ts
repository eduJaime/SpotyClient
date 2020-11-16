import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class ReqInterceptor implements HttpInterceptor{

    private accessToken:string;

    constructor(private authService : AuthService){}

    intercept(request : HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
        this.authService.getToken().subscribe(value => this.accessToken = value);

        const headers = {
            Authorization: `Bearer ${this.accessToken}`,
        };

        const cloneRequest = request.clone({setHeaders : headers});

        return next.handle(cloneRequest); 
    }
}