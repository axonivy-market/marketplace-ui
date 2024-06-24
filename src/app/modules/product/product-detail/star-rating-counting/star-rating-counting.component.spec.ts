import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarRatingCountingComponent } from './star-rating-counting.component';

describe('StarRatingCountingComponent', () => {
  let component: StarRatingCountingComponent;
  let fixture: ComponentFixture<StarRatingCountingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarRatingCountingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StarRatingCountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
