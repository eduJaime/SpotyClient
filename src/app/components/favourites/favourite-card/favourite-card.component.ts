import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Track, Tracks } from 'src/app/interfaces/artist';
import { AlbumService } from 'src/app/services/appServices/album/album.service';
import { FavouriteSongComponent } from '../favourite-song/favourite-song.component';

@Component({
  selector: 'app-favourite-card',
  templateUrl: './favourite-card.component.html',
  styleUrls: ['./favourite-card.component.css']
})
export class FavouriteCardComponent implements OnInit {
  @Input() track: Track;
  @Input() favArray : string[];
  @Output() delTrack = new EventEmitter<Track>();

  constructor(private albumService: AlbumService, private modalService: NgbModal) { }

  ngOnInit(): void {   
  }

  open(){
    const modalRef = this.modalService.open(FavouriteSongComponent, { size: 'lg' });
    modalRef.componentInstance.track = this.track;
  }

  public removeTrack(){
    this.delTrack.emit(this.track);
  }

  public removeFavourites(track :Track){
    this.favArray.splice(this.favArray.indexOf(track.id));
    this.albumService.setFavourite(this.favArray);
    this.albumService.removeFavTrack(track);
    track.fav=false;
    console.log('array', this.favArray);
  }
}
