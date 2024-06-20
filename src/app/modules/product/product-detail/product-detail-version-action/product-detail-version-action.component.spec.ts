import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailVersionActionComponent } from './product-detail-version-action.component';

describe('ProductVersionActionComponent', () => {
  let component: ProductDetailVersionActionComponent;
  let fixture: ComponentFixture<ProductDetailVersionActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailVersionActionComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetailVersionActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
