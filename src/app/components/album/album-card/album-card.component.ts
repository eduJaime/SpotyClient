import { Component, Input, OnInit } from '@angular/core';
import { ArtistAlbum } from 'src/app/interfaces/artist';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent implements OnInit {
  @Input() album: ArtistAlbum;

  constructor() { }

  ngOnInit(): void {
  }

}
