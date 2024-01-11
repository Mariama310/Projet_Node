import { Component,OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

interface Deck{
  id:number;
  deckName:string;
  createdAt:string;
  updatedAt:string;
  userId:number;
}

interface AllDecks{
  decks:Deck[];
}
@Component({
  selector: 'app-decks-list',
  templateUrl: './decks-list.component.html',
  styleUrls: ['./decks-list.component.css']
})
export class DecksListComponent {
    userId:number|null=null;
    decks:Deck[]=[];
    constructor(private router: Router,
              private httpClient:HttpClient,
              private route:ActivatedRoute
    ) {}
    ngOnInit() {
      let ui= localStorage.getItem('userId');
      if(ui) {
        this.userId= parseInt(ui,10);
      }else {
        this.router.navigateByUrl('/login');
      }

      this.httpClient.get(`http://localhost:8080/api/decks/get/${this.userId}`,)
        .subscribe((data ) => {
          let decks=data as AllDecks;
          for (let card in decks.decks){
            console.log(card);
          }
          console.log('data : ',decks);
          if(decks.decks){
            this.decks=decks.decks;
          }
          else {
            console.log("pas de decks pour ce user");
          }
        })
    }

    onClickDelete(event:Event,deckId:number) {
      event.stopPropagation();
      this.httpClient.delete(`http://localhost:8080/api/decks/delete/${deckId}`,)
        .subscribe(() => {
          window.location.reload();
        });


    }

    onclickReview(event:Event,deckId:number){
      event.stopPropagation()
      this.router.navigateByUrl(`decks/review/${deckId}`);
    }




}
