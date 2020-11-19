import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { Artist, ArtistItem, Artists } from 'src/app/interfaces/artist';
import { ArtistService } from 'src/app/services/appServices/artist/artist.service';

@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.css']
})
export class ArtistSearchComponent implements OnInit {

  public artistItem: ArtistItem;

  constructor(private artistService: ArtistService, public router: Router) { }

  ngOnInit(): void { }

  searchArtist = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(term => term.length < 1 ? []
        : this.artistService.getArtists(term).pipe(
          map((artist: Artist) => artist.artists.items)
        )),
    );

  formatter = (x: { name: string }) => x.name;

  public getArtista(event: any) {
    if (typeof event === 'object') {
      this.artistItem = event;
      this.artistService.setSelectedArtist(this.artistItem); 
      if(this.router.url === '/main'){
        this.router.navigate(['artist']);
      }
      
    }
  }


}
