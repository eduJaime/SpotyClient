import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from "./services/auth-guard.service";
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { ArtistPageComponent } from './components/artist/artist-page/artist-page.component';

const routes: Routes = [
  {
    path: 'login',
    component : LoginComponent
  },
  {
    path: 'main',
    component : MainComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'artist',
    component : ArtistPageComponent,
    canActivate: [AuthGuard],
  },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },

];

const config: ExtraOptions = {
  useHash: false,
};


@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
