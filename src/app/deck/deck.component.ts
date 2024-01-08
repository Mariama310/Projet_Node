import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AddCardComponent} from "../add-card/add-card.component";
import {MatDialog} from "@angular/material/dialog";

interface Card{
  id:number;
  recto:string;
  verso:string;
  state:string;
  createdAt:string;
  updatedAt:string;
  deckId:number;

}
interface DeckAllCards{
  cards:Card[];
}
@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent {
  public cards:Card[]=[];
  id:number|null=null;
  @Input() deckName: string="";
  constructor(private router: Router,
              private httpClient:HttpClient,
              private route:ActivatedRoute
  ) {}



  ngOnInit() {
    this.route.paramMap.subscribe(params=> {
      this.id=Number(params.get('id'));
    });

    this.httpClient.get(`http://localhost:8080/api/cards/get/${this.id}`,)
      .subscribe((data ) => {
        let cards=data as DeckAllCards;
        for (let card in cards.cards){
          console.log(card);
        }
        console.log('data : ',cards);
        if(cards.cards){
          this.cards=cards.cards;
        }
        else {
          console.log("pas de user à ce nom");
        }
      })
  }





}
