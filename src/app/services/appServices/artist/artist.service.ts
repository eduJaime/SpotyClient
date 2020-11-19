import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Artist, ArtistItem, Artists } from 'src/app/interfaces/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public getArtists(artistName: string) : Observable<Artist>{
    let params = new HttpParams();
    params = params.append('q', artistName);
    params = params.append('type', 'artist');

    return this.httpClient.get<Artist>(this.apiUrl + 'search', {params : params});
  }
}