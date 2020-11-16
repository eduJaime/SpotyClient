import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute, private authService: AuthService, private router :Router) { }

  ngOnInit(): void {
    const accessToken = this.getTokens(this.route.snapshot.fragment).access_token;
    if (accessToken != null) {
      this.authService.setToken(accessToken)
      this.authService.getToken().subscribe(value => console.log(value))
      this.authService.getUserInfo()
      this.router.navigate(['main'])
    }
  }
  getTokens(route: string) {
    var urlParams = new URLSearchParams(route);
    return { access_token: urlParams.get("access_token"), token_type: urlParams.get("token_type"), refresh_token: urlParams.get("token_type") }
  }

}
