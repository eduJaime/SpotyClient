import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { BehaviorSubject } from 'rxjs';
import { ArtistAlbum, Tracks } from 'src/app/interfaces/artist';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private selectedAlbum : BehaviorSubject<ArtistAlbum> = new BehaviorSubject(null);
  private apiUrl: string = environment.apiUrl;

  constructor(private httpService : HttpClient) { }

  public getAlbumTracks(albumId : string){
    return this.httpService.get<Tracks>(this.apiUrl + "albums/" + albumId + "/tracks")
  }


  public getSelectedAlbum(){
    return this.selectedAlbum.asObservable();
  }

  public setSelectedAlbum(album : ArtistAlbum){
    this.selectedAlbum.next(album);
  }




}
