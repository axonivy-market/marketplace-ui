import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductVersionActionComponent } from './product-version-action.component';

describe('ProductVersionActionComponent', () => {
  let component: ProductVersionActionComponent;
  let fixture: ComponentFixture<ProductVersionActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductVersionActionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductVersionActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
