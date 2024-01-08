import {Component, Input, OnInit} from '@angular/core';
import isLoggedIn from "../auth/auth";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  deckId:number|null=null;

  constructor(private router: Router,
              private httpClient:HttpClient,
  ) {}

  ngOnInit() {

  }
  @Input() recto:string='';
  @Input() verso:string='';
  @Input() state:string='';
  @Input() cardId:number=0;
  onClickDelete(cardId:number) {
    this.httpClient.delete(`http://localhost:8080/api/cards/delete/${cardId}`,)
      .subscribe(() => {
        window.location.reload();
      });
  }





}
