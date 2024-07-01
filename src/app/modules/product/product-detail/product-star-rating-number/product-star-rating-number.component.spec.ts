import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStarRatingNumberComponent } from './product-star-rating-number.component';

describe('ProductStarRatingNumberComponent', () => {
  let component: ProductStarRatingNumberComponent;
  let fixture: ComponentFixture<ProductStarRatingNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductStarRatingNumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductStarRatingNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
