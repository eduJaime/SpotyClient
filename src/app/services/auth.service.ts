import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private accessToken$ : BehaviorSubject<string> = new BehaviorSubject<string>('');
  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient : HttpClient){} 

  public getToken():Observable<string>{
    return this.accessToken$.asObservable();
  }

  public setToken(token: string):void{
    this.accessToken$.next(token);
  }

  public getUserInfo(){
    return this.httpClient.get(this.apiUrl+'me').subscribe(response => console.log('Response', response));
  }


}
