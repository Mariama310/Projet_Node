import { Component,Input } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent {
  @Input() deckName:string='';
  @Input() deckId:number|null=null;
  public recto='';
  public verso='';

  constructor(private router: Router,
              private httpClient:HttpClient,
  ) {}

  onClickAddCard() {
    console.log('recto :', this.recto);
    console.log('verso :', this.verso);
    this.httpClient.post<any>('http://localhost:8080/api/cards',{recto:this.recto,verso:this.verso,deckId:this.deckId}).subscribe();
    window.location.reload();
  }
}
