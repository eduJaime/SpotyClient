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
    //HealthCheck
    this.authService.getUserInfo()
  }

  

  

}
