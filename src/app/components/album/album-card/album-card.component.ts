import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtistAlbum } from 'src/app/interfaces/artist';
import { AlbumService } from 'src/app/services/appServices/album/album.service';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent implements OnInit {
  @Input() album: ArtistAlbum;

  constructor(private router : Router, private albumService: AlbumService) { }

  ngOnInit(): void {
  }

  public showAlbum(){
    this.albumService.setSelectedAlbum(this.album);
    this.router.navigate(['album/']);
  }

}
