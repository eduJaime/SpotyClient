import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private accessToken$ : BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private httpClient : HttpClient){} 

  public getToken():Observable<string>{
    return this.accessToken$.asObservable();
  }

  public setToken(token: string):void{
    this.accessToken$.next(token);
  }

  private apiUrl: string = environment.apiUrl;

  public getUserInfo(){
    return this.httpClient.get(this.apiUrl+'me').subscribe(response => console.log('Response', response));
  }


}
