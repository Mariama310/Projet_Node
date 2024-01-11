import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckReviewComponent } from './deck-review.component';

describe('DeckReviewComponent', () => {
  let component: DeckReviewComponent;
  let fixture: ComponentFixture<DeckReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeckReviewComponent]
    });
    fixture = TestBed.createComponent(DeckReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
