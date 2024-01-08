import { Component,OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-logged-in-home',
  templateUrl: './logged-in-home.component.html',
  styleUrls: ['./logged-in-home.component.css']
})
export class LoggedInHomeComponent {
  firstName : string|null='';
  constructor(private router: Router,
              private httpClient:HttpClient,
  ) {}
  ngOnInit() {
    this.firstName=localStorage.getItem('firstname');
  }

  onClickDecks() {
    this.router.navigateByUrl('/decks');
  }
}
