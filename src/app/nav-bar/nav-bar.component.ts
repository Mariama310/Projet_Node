import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private router: Router,
              private httpClient:HttpClient,
  ) {}
  onClickLogOut(){
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
