import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//Services
import {AuthService} from './services/auth.service';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { ReqInterceptor } from './services/request.interceptor';
import { NavBarComponent } from './components/nav/nav-bar/nav-bar.component';
import { ArtistSearchComponent } from './components/artist/artist-search/artist-search.component';
import { ArtistService } from './services/appServices/artist/artist.service';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArtistPageComponent } from './components/artist/artist-page/artist-page.component';
import { AlbumCardComponent } from './components/album/album-card/album-card.component';
import { AlbumContainerComponent } from './components/album/album-container/album-container.component';
import { AlbumPageComponent } from './components/album/album-page/album-page.component';
import { AlbumService } from './services/appServices/album/album.service';
import { FavouriteCardComponent } from './components/favourites/favourite-card/favourite-card.component';
import { FavouriteContainerComponent } from './components/favourites/favourite-container/favourite-container.component';
import { FavouriteSongComponent } from './components/favourites/favourite-song/favourite-song.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    NavBarComponent,
    ArtistSearchComponent,
    ArtistPageComponent,
    AlbumCardComponent,
    AlbumContainerComponent,
    AlbumPageComponent,
    FavouriteCardComponent,
    FavouriteContainerComponent,
    FavouriteSongComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    AuthService,
    ArtistService,
    AlbumService,
    { provide: HTTP_INTERCEPTORS, useClass: ReqInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
