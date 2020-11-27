import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { ArtistAlbum, Track, Tracks } from 'src/app/interfaces/artist';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private selectedAlbum : BehaviorSubject<ArtistAlbum> = new BehaviorSubject(null);
  private favouriteList :  BehaviorSubject<string[]> =  new BehaviorSubject([]);
  private apiUrl: string = environment.apiUrl;
  private favouriteTrackList: BehaviorSubject<Tracks> = new BehaviorSubject(null);

  constructor(private httpService : HttpClient) { }

  public getAlbumTracks(albumId : string){
    return this.httpService.get<Tracks>(this.apiUrl + "albums/" + albumId + "/tracks")
  }

  public getTrackList(trackList : string[]): Observable<Tracks>{
    let params = new HttpParams();
    params = params.append('ids', trackList.join(","));
    if (typeof trackList !== 'undefined' && trackList.length > 0) {
      debugger; 
      return this.httpService.get<Tracks>(this.apiUrl+"tracks/", {params : params});   
    }   
  }

  public removeFavTrack(track: Track){
    this.getFavouriteTrackList().subscribe(
      tracks => {
        tracks.tracks.splice(tracks.tracks.indexOf(track));
        this.setFavouriteTrackList(tracks);
      }
    )
  }

  public getFavouriteList(){
    return this.favouriteList.asObservable();
  }
  public setFavourite(fav: string[]){
    this.favouriteList.next(fav);
  }

  public getSelectedAlbum(){
    return this.selectedAlbum.asObservable();
  }

  public setSelectedAlbum(album : ArtistAlbum){
    this.selectedAlbum.next(album);
  }

  public getFavouriteTrackList(){
    return this.favouriteTrackList.asObservable();
  }

  public setFavouriteTrackList(tracks : Tracks){
    this.favouriteTrackList.next(tracks);
  }

}
