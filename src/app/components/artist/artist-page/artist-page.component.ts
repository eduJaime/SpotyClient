import { Component, OnInit } from '@angular/core';
import { ArtistItem } from 'src/app/interfaces/artist';
import { ArtistService } from 'src/app/services/appServices/artist/artist.service';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.css']
})
export class ArtistPageComponent implements OnInit {

  artist : ArtistItem;

  constructor(private artistService : ArtistService) { }

  ngOnInit(): void {
    this.artistService.getSelectedArtist().subscribe(art => this.artist = art)
  }

}
