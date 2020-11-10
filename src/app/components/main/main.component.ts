import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

private token: string;

  constructor(private route: ActivatedRoute, private authService :AuthService) { }

  ngOnInit() {
    this.authService.setToken(this.getTokens(this.route.snapshot.fragment).access_token)
    this.authService.getToken().subscribe(value => console.log(value))
    this.authService.getUserInfo()
  }

  getTokens(route :string) {
    var urlParams = new URLSearchParams(route);
    return {access_token: urlParams.get("access_token"), token_type: urlParams.get("token_type"), refresh_token: urlParams.get("token_type")}
  }

  

}
