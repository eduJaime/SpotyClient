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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: ReqInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
