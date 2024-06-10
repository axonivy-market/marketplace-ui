import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFeedbacksPanelComponent } from './product-feedbacks-panel.component';

describe('ProductFeedbacksPanelComponent', () => {
  let component: ProductFeedbacksPanelComponent;
  let fixture: ComponentFixture<ProductFeedbacksPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductFeedbacksPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductFeedbacksPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
