// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { ActivatedRoute } from '@angular/router';
// import { MOCK_PRODUCTS } from '../../../shared/mocks/mock-data';
// import { MockProductService } from '../../../shared/mocks/mock-services';
// import { ProductService } from '../product.service';
// import { ProductDetailComponent } from './product-detail.component';

// describe('ProductDetailComponent', () => {
//   let component: ProductDetailComponent;
//   let fixture: ComponentFixture<ProductDetailComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [ProductDetailComponent],
//       providers: [
//         {
//           provide: ActivatedRoute,
//           useValue: {
//             snapshot: {
//               params: { id: MOCK_PRODUCTS[0].id },
//             },
//           },
//         },
//       ],
//     })
//       .overrideComponent(ProductDetailComponent, {
//         remove: { providers: [ProductService] },
//         add: {
//           providers: [
//             { provide: ProductService, useClass: MockProductService },
//           ],
//         },
//       })
//       .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ProductDetailComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component.product.name).toEqual(MOCK_PRODUCTS[0].name);
//   });
// });
