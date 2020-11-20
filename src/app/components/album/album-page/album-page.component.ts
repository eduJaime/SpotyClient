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

  constructor(private albumService : AlbumService) { }

  ngOnInit(): void {
    this.albumService.getSelectedAlbum().subscribe( alb => {this.album = alb; this.albumService.getAlbumTracks(this.album.id).subscribe(tr => this.tracks = tr.items)})
  }

}
