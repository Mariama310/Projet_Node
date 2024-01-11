import {Component, Input,OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

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
  selector: 'app-deck-review',
  templateUrl: './deck-review.component.html',
  styleUrls: ['./deck-review.component.css']
})
export class DeckReviewComponent {
  @Input() deckId:number|null=null;
  id:number|null=null;
  public cards:Card[]=[];
  currentIndex=0;
  isAnswerVisible=false;
  constructor(private router: Router,
              private httpClient:HttpClient,
              private route:ActivatedRoute
  ) {}

  ngOnInit(){
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

  onClickNextCard(){
    this.currentIndex= (this.currentIndex+1)%this.cards.length;
  }


}
