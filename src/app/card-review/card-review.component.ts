import {Component, Input,OnInit,OnChanges} from '@angular/core';

@Component({
  selector: 'app-card-review',
  templateUrl: './card-review.component.html',
  styleUrls: ['./card-review.component.css']
})
export class CardReviewComponent {
  @Input()recto:string='';
  @Input()verso:string='';
  @Input() cardId:number|null=null;

  protected isAnswerVisible=false;

  ngOnInit(){
    this.isAnswerVisible=false;
  }
  ngOnChanges(){
    this.isAnswerVisible=false;
  }

  showAnswer(){
    this.isAnswerVisible=true;
  }
}
