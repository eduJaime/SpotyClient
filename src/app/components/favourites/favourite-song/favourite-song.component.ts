import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Track } from 'src/app/interfaces/artist';

@Component({
  selector: 'app-favourite-song',
  templateUrl: './favourite-song.component.html',
  styleUrls: ['./favourite-song.component.css']
})
export class FavouriteSongComponent implements OnInit {
  @Input() track: Track;


  constructor() { }

  ngOnInit(): void {
  }

}
