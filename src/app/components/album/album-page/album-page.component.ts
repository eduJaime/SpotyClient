import { Component, OnInit } from '@angular/core';
import { ArtistAlbum, Track } from 'src/app/interfaces/artist';
import { AlbumService } from 'src/app/services/appServices/album/album.service';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.css']
})
export class AlbumPageComponent implements OnInit {

  album : ArtistAlbum
  tracks : Track[];
  favArray : string[];

  constructor(private albumService : AlbumService) { }

  ngOnInit(): void {
    this.albumService.getFavouriteList().subscribe(fav => this.favArray = fav);
    this.albumService.getSelectedAlbum()
      .subscribe( alb => {
        this.album = alb; 
        this.albumService.getAlbumTracks(this.album.id)
          .subscribe(tr => {
            this.tracks = tr.items;
            this.tracks.forEach(element => {
              if(this.favArray.includes(element.id)){
                element.fav = true;
              }else{
                element.fav= false;
              }
            });
            console.log(this.tracks)
          })
      })
  }

  public addFavourites(track :Track ){
    this.favArray.push(track.id);
    this.albumService.setFavourite(this.favArray);
    track.fav=true;
    console.log('array', this.favArray)
  }

  public removeFavourites(track :Track){
    this.favArray.splice(this.favArray.indexOf(track.id));
    this.albumService.setFavourite(this.favArray);
    track.fav=false;
    console.log('array', this.favArray);
  }


}
