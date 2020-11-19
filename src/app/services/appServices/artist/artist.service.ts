import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Albums, Artist, ArtistItem, Artists } from 'src/app/interfaces/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private selectedArtist : BehaviorSubject<ArtistItem> = new BehaviorSubject(null);

  private apiUrl: string = environment.apiUrl;
  private artistId: string;

  constructor(private httpClient: HttpClient) { 
  }

  public setSelectedArtist(artist : ArtistItem){
    this.selectedArtist.next(artist);
    //this.getSelectedArtist().subscribe(art => console.log('Service set Selected Artist', art))
  }

  public getSelectedArtist(){
    return this.selectedArtist.asObservable();
  }

  public getArtists(artistName: string) : Observable<Artist>{
    let params = new HttpParams();
    params = params.append('q', artistName);
    params = params.append('type', 'artist');

    return this.httpClient.get<Artist>(this.apiUrl + 'search', {params : params});
  }
  public getArtistAlbums(id: string) : Observable<Albums>{
    //this.getSelectedArtist().subscribe(artist => this.artistId = artist.id);
    return this.httpClient.get<Albums>(this.apiUrl + 'artists/'+ id + '/albums');

  }
}
