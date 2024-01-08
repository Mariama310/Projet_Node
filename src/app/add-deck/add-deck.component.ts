import {Component, Input,OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-deck',
  templateUrl: './add-deck.component.html',
  styleUrls: ['./add-deck.component.css']
})
export class AddDeckComponent {
  @Input() userId:number|null=null;
  public deckName='';

  constructor(private router: Router,
              private httpClient:HttpClient,
  ) {}

  ngOnInit() {
    const ui=localStorage.getItem('userId');
    if(ui){
      this.userId=parseInt(ui,10);
    }
  }
  onClickAddDeck() {

    this.httpClient.post<any>('http://localhost:8080/api/decks',{deckName:this.deckName,userId:this.userId}).subscribe();
    window.location.reload();
  }

}
