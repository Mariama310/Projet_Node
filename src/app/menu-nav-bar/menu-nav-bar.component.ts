import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-menu-nav-bar',
  templateUrl: './menu-nav-bar.component.html',
  styleUrls: ['./menu-nav-bar.component.css']
})
export class MenuNavBarComponent {
  constructor(private activatedRoute : ActivatedRoute, private router: Router) {}
  onClickGotoPageSearch() {
    this.router.navigate(['/search']);
  }
}
