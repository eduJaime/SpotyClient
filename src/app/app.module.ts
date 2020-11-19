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
import { ArtistSearchComponent } from './components/artist/artistSearch/artist-search/artist-search.component';
import { ArtistService } from './services/appServices/artist/artist.service';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    NavBarComponent,
    ArtistSearchComponent
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
    { provide: HTTP_INTERCEPTORS, useClass: ReqInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
