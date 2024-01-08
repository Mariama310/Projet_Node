import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecksListComponent } from './decks-list.component';

describe('DecksListComponent', () => {
  let component: DecksListComponent;
  let fixture: ComponentFixture<DecksListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DecksListComponent]
    });
    fixture = TestBed.createComponent(DecksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
