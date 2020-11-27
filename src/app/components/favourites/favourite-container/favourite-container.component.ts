import { AfterContentInit, Component, OnChanges, OnInit } from '@angular/core';
import { Track, Tracks } from 'src/app/interfaces/artist';
import { AlbumService } from 'src/app/services/appServices/album/album.service';

@Component({
  selector: 'app-favourite-container',
  templateUrl: './favourite-container.component.html',
  styleUrls: ['./favourite-container.component.css']
})
export class FavouriteContainerComponent implements OnInit{

  favouriteIdList: string[];
  favouriteTracks: Track[];
  tracks : Tracks;

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.albumService.getFavouriteList()
      .subscribe(fav => {
        this.favouriteIdList = fav;  
        console.log('favlist init',this.favouriteIdList)              
      });
      if(this.favouriteIdList.length > 0){
        this.albumService.getTrackList(this.favouriteIdList)
        .subscribe(tracks => { this.albumService.setFavouriteTrackList(tracks);
          this.albumService.getFavouriteTrackList().subscribe(tracks => {                      
          this.favouriteTracks = tracks.tracks;
          debugger;
          console.log('this.favouriteTracks', this.favouriteTracks);
          console.log('tracks.items', tracks.tracks);
          console.log('tracks', tracks);
          })    
        });
          
          debugger;
      }

  }

  public deleteTrack(tr: Track){
    let tempTrack = {tracks:[], items:[]}
    console.log('FavContainer favouriteIdList', this.favouriteIdList);
    console.log('FavContainer favouriteIdList.indexof', this.favouriteIdList.indexOf(tr.id));
    this.albumService.setFavourite(this.favouriteIdList.filter(t => t !== tr.id))
    tempTrack.tracks = this.favouriteTracks.filter(t => t.id !== tr.id)      
    this.albumService.setFavouriteTrackList(tempTrack); 
   }

  

  

}
