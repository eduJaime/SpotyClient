import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, Event } from '@angular/router';
import { filter,  } from 'rxjs/operators';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  showSearch : boolean = false;

  constructor(private router: Router) {
    router.events.pipe(filter((e: Event): e is RouterEvent => e instanceof RouterEvent)).subscribe((e: RouterEvent) => {
      if( e.url.localeCompare('/')=== 0 || e.url.localeCompare('/login')=== 0 || e.url.localeCompare('/main') === 0 ){this.showSearch = false}else{this.showSearch = true};
    });
  }

  ngOnInit(): void {
  }

  public goToMain(){    
    this.router.navigate(['main/']);
  }


}
