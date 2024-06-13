import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFeedbacksDialogComponent } from './show-feedbacks-dialog.component';

describe('ShowFeedbacksDialogComponent', () => {
  let component: ShowFeedbacksDialogComponent;
  let fixture: ComponentFixture<ShowFeedbacksDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowFeedbacksDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowFeedbacksDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
