import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInHomeComponent } from './logged-in-home.component';

describe('LoggedInHomeComponent', () => {
  let component: LoggedInHomeComponent;
  let fixture: ComponentFixture<LoggedInHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoggedInHomeComponent]
    });
    fixture = TestBed.createComponent(LoggedInHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
