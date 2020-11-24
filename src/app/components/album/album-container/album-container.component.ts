import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Albums, ArtistAlbum } from 'src/app/interfaces/artist';
import { ArtistService } from 'src/app/services/appServices/artist/artist.service';

@Component({
  selector: 'app-album-container',
  templateUrl: './album-container.component.html',
  styleUrls: ['./album-container.component.css']
})
export class AlbumContainerComponent implements OnInit {

  artistAlbums : ArtistAlbum[];
  

  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {
    this.artistService.getSelectedArtist()
      .subscribe(artist => {
        this.artistService.getArtistAlbums(artist.id)
          .subscribe(albums =>  this.artistAlbums = albums.items)})
  }



}
